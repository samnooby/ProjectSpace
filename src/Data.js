import Home from './views/Home.vue';
import About from './views/About.vue';
import Booking from './views/Booking.vue';
import BowlSongs from './views/BowlSongs.vue';
import CurrentProjects from './views/CurrentProjects.vue';
import ErrorPage from './views/ErrorPage.vue';

export const AppData = {
  errorMessage: '',
  Links: [
    {
      path: '/',
      name: 'home',
      propername: 'Home',
      component: Home,
      hidden: true,
      meta: {
        title: 'Home Page - Space Force'
      }
    },
    {
      path: '/about',
      name: 'about',
      propername: 'About',
      component: About,
      meta: {
        title: 'About - Space Force'
      }
    },
    {
      path: '/booking',
      name: 'booking',
      propername: 'Book Chillout',
      component: Booking,
      meta: {
        title: 'Booking - Space Force'
      }
    },
    {
      path: '/bowlsongs',
      name: 'bowlsongs',
      propername: 'Bowl Songs',
      component: BowlSongs,
      meta: {
        title: 'Bowl Songs - Space Force'
      }
    },
    {
      path: '/currentprojects',
      name: 'currentprojects',
      propername: 'Current Projects',
      component: CurrentProjects,
      meta: {
        title: 'Current Projects - Space Force'
      }
    },
    {
      path: '/ERROR',
      name: 'error',
      propername: 'ERROR',
      component: ErrorPage,
      hidden: true,
      meta: {
        title: 'ERROR'
      }
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
      progress: 60
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
      img: {
        imageURL:
          'https://res.cloudinary.com/lukabuz/image/upload/inzzvhwh6eqifffsrgej'
      }
    },
    {
      id: 2,
      owner: 'Liam',
      posttext: 'This is information about Liam',
      img: { imageURL: require('@/static/logo.png') }
    }
  ],
  LOADING: 0,
  SUCCESS: 1,
  FAIL: 2
};
