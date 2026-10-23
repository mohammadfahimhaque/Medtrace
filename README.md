# Medtrace

A Next.js and TypeScript prototype for medicine-pack custody tracking and serial
verification. The default mode is a synthetic, in-memory demo.

## Run locally

Use Node.js 24 and npm. From a fresh clone:

```bash
npm ci
npm run dev -- --hostname 127.0.0.1
```

Open http://localhost:3000. `.env.example` documents the public settings. Mock mode
is the default and needs no wallet funds, private keys, or external services.

```bash
npm test
npx tsc --noEmit
npm run build
```

The existing tests cover custody transitions, duplicate serials, repeated
dispensing, pharmacy matching, record mapping, and the 600-second fresh-dispense
boundary. CI runs tests, type checking, and a production build in mock mode.

## Demo workflow

Use the manufacturer, distributor, and pharmacy screens to create a pack,
transfer custody, and dispense it. The QR and serial verification screens show
records from the demo store. Sample serials start at `SQ-000101`.

Demo records live in process memory and reset when the server restarts. Demo
transaction signatures are synthetic. The public wallet identifiers in config
are placeholders, not controlled accounts or proof of on-chain transactions.

## Implementation boundaries

- `src/lib/medtrace/mock.ts` implements the synthetic read/write store.
- `verdict.ts` evaluates serial status and optional pharmacy context.
- `onchain.ts` fails closed until a deployed program ID, IDL, and account mappings
  are supplied. Selecting onchain mode does not enable a working integration.
- The mock write endpoint accepts an actor identifier from the request. It is a
  demonstration, not authenticated custody authorization. Do not expose it as a
  real tracking service.

A `GENUINE` result means the demo record satisfies these limited rules. It is not
proof of a medicine's authenticity, safety, expiry status, or regulatory approval.
No real medicine supply chain or blockchain deployment is verified here.

## Dependency security

Framework and test-runner security patches are included in this maintenance
change. Run `npm audit` to inspect current advisories. Some Solana/wallet dependency
chains still have advisories without an available compatible fix; this prototype
is not production-ready. Replacing that stack requires a separate integration
review and tests. Never commit wallet private keys or real customer data.
