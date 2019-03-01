import Home from './views/Home.vue';
import About from './views/About.vue';
import Booking from './views/Booking.vue';
import BowlSongs from './views/BowlSongs.vue';
import CurrentProjects from './views/CurrentProjects.vue';

export const AppData = {
  Links: [
    {
      path: '/',
      name: 'home',
      propername: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      propername: 'About',
      component: About
    },
    {
      path: '/booking',
      name: 'booking',
      propername: 'Book Chillout',
      component: Booking
    },
    {
      path: '/bowlsongs',
      name: 'bowlsongs',
      propername: 'Bowl Songs',
      component: BowlSongs
    },
    {
      path: '/currentprojectsk',
      name: 'currentprojects',
      propername: 'Current Projects',
      component: CurrentProjects
    }
  ],
  Projects: [
    {
      id: 0,
      title: 'This Website',
      description: 'Making the official space force website',
      expected: '01/02/2023',
      progress: 50
    },
    {
      id: 1,
      title: 'Trap or Not Ai',
      description:
        'Ai that helps find out if that person at the bar is a girl or a trap',
      expected: '01/01/2020',
      progress: 5
    },
    {
      id: 2,
      title: 'Website App',
      description: 'A android app for the official SpaceForce Website',
      expected: '01/02/2023',
      progress: 5
    },
    {
      id: 3,
      title: 'Weed Growing',
      description: 'Growing weed',
      expected: '01/02/2030',
      status: 'InProgress',
      progress: 10
    },
    {
      id: 4,
      title: 'Bar',
      description: 'Building a bar for the house',
      expected: '01/02/2023',
      progress: 0
    },
    {
      id: 5,
      title: 'Bowl Song Generator',
      description: 'A app that generates a new song to smoke your bowl to',
      expected: '02/05/2019',
      progress: 25
    }
  ],
  HomePosts: [
    {
      id: 0,
      date: new Date(),
      owner: 'sam',
      text: '<span class="red"> This is a test </span>',
      img: { imageURL: require('@/static/logo.png') },
      title: 'The First Post'
    },
    {
      id: 1,
      date: new Date(),
      owner: 'sam',
      text: 'hey the is a test to the site',
      title: 'The Second Post'
    },
    {
      id: 2,
      date: new Date(),
      owner: 'sam',
      text: 'hey the is a test to the site',
      title: 'The third Post'
    },
    {
      id: 3,
      date: new Date(),
      owner: 'sam',
      text: 'hey the is a test to the site',
      title: 'The Fourth Post'
    },
    {
      id: 4,
      date: new Date(),
      owner: 'sam',
      text: 'hey the is a test to the site',
      title: 'The Fifth Post'
    }
  ],
  AboutPage: [
    {
      id: 0,
      owner: 'Sam',
      posttext: 'This is information about Sam',
      img: { imageURL: require('@/static/logo.png') }
    },
    {
      id: 1,
      owner: 'Luka',
      posttext: 'This is information about Luka',
      img: { imageURL: require('@/static/logo.png') }
    },
    {
      id: 2,
      owner: 'Liam',
      posttext: 'This is information about Liam',
      img: { imageURL: require('@/static/logo.png') }
    }
  ]
};
