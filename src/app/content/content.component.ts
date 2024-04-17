import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  cards = [
    {
      imageUrl: 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2',
      title: 'Card 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/6711207/pexels-photo-6711207.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2',
      title: 'Card 2',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/13286332/pexels-photo-13286332.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2',
      title: 'Card 3',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/8872315/pexels-photo-8872315.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2',
      title: 'Card 4',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/13294534/pexels-photo-13294534.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2',
      title: 'Card 5',
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2',
      title: 'Card 6',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2',
      title: 'Card 7',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/101667/pexels-photo-101667.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2',
      title: 'Card 8',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/14256397/pexels-photo-14256397.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2',
      title: 'Card 9',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/8989423/pexels-photo-8989423.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2',
      title: 'Card 10',
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

}
