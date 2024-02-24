export function load({ locals }: { locals: { user: any } }) {
  return { users: locals.user };
}
