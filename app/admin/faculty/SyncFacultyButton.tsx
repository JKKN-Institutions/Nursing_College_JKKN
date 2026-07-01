'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { RefreshCw } from 'lucide-react';
import toast from 'react-hot-toast';

type SyncResult = {
  ok: boolean;
  designations: string[];
  roleKeys: string[];
  fetched: number;
  matched: number;
  perDesignation: Record<string, number>;
  apiDesignationsSeen: Record<string, number>;
  apiRoleTypesSeen: Record<string, number>;
  apiRoleKeysSeen: Record<string, number>;
  upserted: number;
  softDeleted: number;
  skipped: number;
  errors: string[];
  durationMs: number;
};

export default function SyncFacultyButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [running, setRunning] = useState(false);

  async function handleSync() {
    if (running) return;
    setRunning(true);

    const toastId = toast.loading('Syncing senior learners from MyJKKN…');
    try {
      const res = await fetch('/api/admin/sync-faculty', {
        method: 'POST',
        headers: { Accept: 'application/json' },
      });
      const body: SyncResult | { error: string } = await res.json();

      if (!res.ok && !('matched' in body)) {
        const msg = 'error' in body ? body.error : `HTTP ${res.status}`;
        toast.error(`Sync failed: ${msg}`, { id: toastId });
        return;
      }

      const s = body as SyncResult;
      const breakdown = Object.entries(s.perDesignation ?? {})
        .filter(([, n]) => n > 0)
        .map(([k, n]) => `${k}: ${n}`)
        .join(', ');
      const summary = `Fetched ${s.fetched} · Matched ${s.matched}${breakdown ? ` (${breakdown})` : ''} · Upserted ${s.upserted} · Deactivated ${s.softDeleted}`;

      // Always log diagnostics so we can see exactly what the API returned.
      console.group('[Faculty sync result]');
      console.log('Fetched (after dedupe):', s.fetched);
      console.log('Matched:', s.matched);
      console.log('Per-bucket:', s.perDesignation);
      console.table(s.apiDesignationsSeen);
      console.log('Designations seen:', s.apiDesignationsSeen);
      console.log('role_types seen:', s.apiRoleTypesSeen);
      console.log('role_keys seen:', s.apiRoleKeysSeen);
      if (s.errors.length > 0) console.error('Errors:', s.errors);
      console.groupEnd();

      if (s.errors.length > 0) {
        const firstError = s.errors[0];
        toast.error(`${summary}\n${firstError}`, { id: toastId, duration: 12000 });
      } else if (s.fetched > 0 && s.matched === 0) {
        toast.error(
          `Fetched ${s.fetched} but nothing matched the designation filter. See the console for the list of designations returned.`,
          { id: toastId, duration: 10000 }
        );
      } else {
        toast.success(summary, { id: toastId, duration: 6000 });
      }

      startTransition(() => router.refresh());
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Network error';
      toast.error(`Sync failed: ${message}`, { id: toastId });
    } finally {
      setRunning(false);
    }
  }

  const busy = running || isPending;

  return (
    <button
      type="button"
      onClick={handleSync}
      disabled={busy}
      className="flex items-center gap-2 bg-white text-[#006837] border border-[#006837] text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#006837]/5 transition disabled:opacity-60 disabled:cursor-not-allowed"
      title="Pull the latest senior learner records from MyJKKN"
    >
      <RefreshCw className={`w-4 h-4 ${busy ? 'animate-spin' : ''}`} />
      {busy ? 'Syncing…' : 'Sync from MyJKKN'}
    </button>
  );
}
