import {inject} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

export const canActivate = () => {
  const authService = inject(AuthService)
  const router = inject(Router)

  if (authService.isAuthenticated()) {
    return true
  } else {
    router.navigate(['/login']).then()
    return false
  }
}
//   isAuthenticated(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): boolean {
//     if (!this.authService.isAuthenticated()) {
//       this.router.navigate(['/login']).then();
//       return false;
//     }
//
//     const requiredRoles: unknown = route.data['roles'];
//
//     if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
//       return true;
//     }
//
//     let hasRole = requiredRoles.every((role) =>
//       this.authService.hasRole(role)
//     );
//
//     if (!hasRole) {
//       this.router.navigate(['/']).then();
//       return false;
//     }
//
//     return true;
//   }

