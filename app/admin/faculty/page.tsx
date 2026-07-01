import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import { UserCircle2, Mail } from 'lucide-react';
import SyncFacultyButton from './SyncFacultyButton';

const ROLE_BADGE_STYLES: Record<string, string> = {
  principal: 'bg-purple-50 text-purple-700 ring-1 ring-purple-200',
  hod: 'bg-blue-50 text-blue-700 ring-1 ring-blue-200',
  facilitator: 'bg-amber-50 text-amber-700 ring-1 ring-amber-200',
  faculty: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200',
};

function formatRole(key: string | null, name: string | null) {
  if (name) return name;
  if (!key) return '—';
  return key
    .split(/[_-]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default async function AdminFaculty() {
  const supabase = await createClient();
  const collegeId = await getAdminCollegeId();
  const { data: members } = await supabase
    .from('faculty')
    .select(
      'id, name, designation, department, qualification, experience_years, photo_url, email, display_order, is_active, role_key, role_name'
    )
    .eq('college_id', collegeId)
    .eq('source', 'jkkn')
    .order('display_order', { ascending: true })
    .order('name', { ascending: true });

  const total = members?.length ?? 0;
  const active = members?.filter((m) => m.is_active).length ?? 0;

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Senior Learners</h1>
          <p className="text-gray-500 text-sm mt-0.5">
            {total} total · {active} active
          </p>
        </div>
        <div className="flex items-center gap-2">
          <SyncFacultyButton />
        </div>
      </div>

      {/* Table */}
      {members && members.length > 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr className="text-left">
                  <th className="px-4 py-3 font-semibold w-14">#</th>
                  <th className="px-4 py-3 font-semibold">Senior Learner</th>
                  <th className="px-4 py-3 font-semibold">Role</th>
                  <th className="px-4 py-3 font-semibold">Designation</th>
                  <th className="px-4 py-3 font-semibold">Department</th>
                  <th className="px-4 py-3 font-semibold">Contact</th>
                  <th className="px-4 py-3 font-semibold w-20 text-center">Exp.</th>
                  <th className="px-4 py-3 font-semibold w-24">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {members.map((m, index) => {
                  const roleKey = (m.role_key ?? '').toLowerCase();
                  const badgeStyle =
                    ROLE_BADGE_STYLES[roleKey] ?? 'bg-gray-50 text-gray-600 ring-1 ring-gray-200';
                  return (
                    <tr
                      key={m.id}
                      className={`hover:bg-gray-50/60 transition ${
                        m.is_active ? '' : 'opacity-60'
                      }`}
                    >
                      <td className="px-4 py-3 text-gray-400 text-xs">
                        {String(index + 1).padStart(2, '0')}
                      </td>

                      {/* Faculty (photo + name + qualification) */}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3 min-w-[200px]">
                          {m.photo_url ? (
                            <img
                              src={m.photo_url}
                              alt={m.name}
                              className="w-10 h-10 rounded-full object-cover border border-gray-100 flex-shrink-0"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                              <UserCircle2 className="w-6 h-6 text-gray-300" />
                            </div>
                          )}
                          <div className="min-w-0">
                            <p className="font-semibold text-gray-900 truncate">{m.name}</p>
                            {m.qualification && (
                              <p className="text-xs text-gray-400 truncate">{m.qualification}</p>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Role */}
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full ${badgeStyle}`}
                        >
                          {formatRole(m.role_key, m.role_name)}
                        </span>
                      </td>

                      {/* Designation */}
                      <td className="px-4 py-3 text-gray-700">
                        {m.designation || <span className="text-gray-300">—</span>}
                      </td>

                      {/* Department */}
                      <td className="px-4 py-3 text-gray-600">
                        {m.department || <span className="text-gray-300">—</span>}
                      </td>

                      {/* Contact */}
                      <td className="px-4 py-3">
                        {m.email ? (
                          <a
                            href={`mailto:${m.email}`}
                            className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-[#006837]"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span className="truncate max-w-[180px]">{m.email}</span>
                          </a>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>

                      {/* Experience */}
                      <td className="px-4 py-3 text-center text-gray-700">
                        {m.experience_years > 0 ? (
                          <span className="text-xs font-medium">{m.experience_years}y</span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>

                      {/* Status */}
                      <td className="px-4 py-3">
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            m.is_active
                              ? 'bg-green-50 text-green-600'
                              : 'bg-gray-100 text-gray-500'
                          }`}
                        >
                          {m.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-16 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-4">
            <UserCircle2 className="w-7 h-7 text-rose-400" />
          </div>
          <p className="font-semibold text-gray-700 mb-1">No senior learners synced yet</p>
          <p className="text-sm text-gray-400 mb-5">
            Click <span className="font-medium">Sync from MyJKKN</span> to pull principals, HODs and facilitators from MyJKKN.
          </p>
          <div className="flex items-center gap-2">
            <SyncFacultyButton />
          </div>
        </div>
      )}
    </div>
  );
}
