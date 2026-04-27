# Harness CI/CD plan

The Harness pipeline should make each validation step mandatory for pull requests and for `main`.

Recommended command order:

1. `pnpm install --frozen-lockfile`
2. `pnpm lint`
3. `pnpm typecheck`
4. `pnpm test`
5. `pnpm build`
6. `pnpm build-storybook`

Static deploy artifacts:

- Demo app: `apps/demo/dist`
- Storybook: `packages/components/storybook-static`

For pull requests, add a Changesets check so package changes include a changeset when needed.
For `main`, add a versioning or release stage after validation once package publishing is introduced.
