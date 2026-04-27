# Harness CI/CD plan

The Harness pipeline should make each validation step mandatory for pull requests and for `main`.

Use Node 20 for every build step. The project requires Node 18.18+ and is developed against Node 20+ tooling, so a Harness default Node 16 image will fail before install/build.

Recommended container image:

```text
node:20-bookworm
```

Recommended command order:

1. `corepack enable`
2. `corepack prepare pnpm@9.15.4 --activate`
3. `pnpm install --frozen-lockfile`
4. `pnpm lint`
5. `pnpm typecheck`
6. `pnpm test`
7. `pnpm build`
8. `pnpm build-storybook`

Static deploy artifacts:

- Demo app: `apps/demo/dist`
- Storybook: `packages/components/storybook-static`

For pull requests, add a Changesets check so package changes include a changeset when needed.
For `main`, add a versioning or release stage after validation once package publishing is introduced.
