import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.scss']
})
export class LandingPage {
  heroImage = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920';
  coachingImage = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400';

  paths = [
    {
      numero: '01',
      titre: 'Strength',
      texte: 'Build a powerful foundation with progressive, coach-led training.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=900'
    },
    {
      numero: '02',
      titre: 'Conditioning',
      texte: 'Increase speed, stamina, and resilience—without burning out.',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=900'
    },
    {
      numero: '03',
      titre: 'Personal',
      texte: 'One-to-one programming engineered around your goals and schedule.',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=900'
    }
  ];

  stats = [
    { valeur: '12', label: 'Expert coaches' },
    { valeur: '48', label: 'Weekly classes' },
    { valeur: '4.9', label: 'Member rating' },
    { valeur: '7', label: 'Days a week' }
  ];

  avantages = [
    'Unlimited coached sessions',
    'Monthly progress review',
    'Open gym access',
    'Cancel anytime'
  ];
}
