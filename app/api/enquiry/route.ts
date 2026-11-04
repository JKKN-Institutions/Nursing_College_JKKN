// POST /api/enquiry - the same Nursing enquiry submit, reachable with fetch().
//
// WHY A ROUTE AND NOT ONLY THE SERVER ACTION. The Call / WhatsApp gate (lib/call-gate.ts) must open
// the dialer or WhatsApp in the SAME tap that sends the lead: a browser lets a page open another app
// only during a user's tap, and waiting for the CRM's answer first can outlast that window. So the
// gate sends the form with fetch(..., { keepalive: true }) - which a server action cannot be called
// with - and opens the app at once; keepalive lets the request finish even if the page goes away.
//
// It runs the SAME code as the form's server action (submitNursingEnquiry): same validation, same
// CRM payload, same 409 handling. Nothing new is decided here.
//
// No trailing slash: this site does not normalise to one (next.config.ts), so the client calls
// "/api/enquiry" exactly - "/api/enquiry/" would answer with a redirect first.

import { submitNursingEnquiry } from "@/app/actions/nursing-enquiry"

export async function POST(request: Request) {
  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return Response.json({ success: false, error: "Bad request." }, { status: 400 })
  }
  const result = await submitNursingEnquiry(null, formData)
  return Response.json(result, { status: result.success ? 200 : 422 })
}
