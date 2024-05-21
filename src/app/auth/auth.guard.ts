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
