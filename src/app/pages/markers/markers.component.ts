import { Component, OnInit, inject } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-markers',
  standalone: true,
  imports: [],
  templateUrl: './markers.component.html',
  styleUrl: './markers.component.scss'
})
export class MarkersComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly supabase = inject(SupabaseService);
  session = this.supabase.session

  ngOnInit() {
    this.supabase.authChanges((_, session) => {
      this.session = session;
      if (!session) this.router.navigate(['login'])
    })
  }
}
