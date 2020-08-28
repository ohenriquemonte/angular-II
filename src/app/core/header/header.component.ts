import { Component } from "@angular/core";
import { UserService } from "../user/user.service";
import { Observable } from "rxjs";
import { User } from "../user/user";

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user$: Observable<User>; // padrao de observable é colocar $
    user: User;

    constructor(
        userService: UserService, // nao recebeu private pq nao será utilizado no restante da classe
    ) {
        this.user$ = userService.getUser();
        this.user$.subscribe(user => this.user = user);
    }
}