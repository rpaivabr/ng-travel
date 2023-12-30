import { Component, inject } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly router = inject(Router);
  private readonly supabase = inject(SupabaseService);

  async onSubmit(): Promise<void> {
    const { data, error } = await this.supabase.signInWithGithub()
    console.log(data, error);
    this.router.navigate(['markers'])
  }
}
