import Navbar from "./Navbar";
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

import { useAuth } from "../Context/auth";
export const Home = () => {
  // const items =[
  //     <><img src="https://d39vol41m7feya.cloudfront.net/1600098975-pngtree-simple-red-shading-background-illustration-design-backgroundscience-and-technologyred-image_70514.jpg" alt="" className="sliderimg" />
  //     <img src="https://images.freekaamaal.com/featured_images/86240_1.jpg" alt="" className="sliderimg" /><img src="https://images.unsplash.com/photo-1573739022854-abceaeb585dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" /></>,
  //     <img  src="https://images.unsplash.com/photo-1574234956923-9281663e479c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=""  />,
  //     <img  src="https://media.istockphoto.com/photos/colorful-phone-cases-picture-id1074163642?b=1&k=20&m=1074163642&s=170667a&w=0&h=b-g0uWUQyhH_9WQ31LQY3BhE53OoZ3rEz7oi1uNZZZU=" alt="" />,
  //     <img  src="https://media.istockphoto.com/photos/mobile-kit-with-smartphone-headphones-and-chargers-picture-id1156397327?b=1&k=20&m=1156397327&s=170667a&w=0&h=JRUmv6CIwz3FuJ5piOKvNbRU6hHJsp-dcUJ1kBZLBZY=" alt="" />,
  //     <img  src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />,
  //     <img  src="https://images.unsplash.com/photo-1603539444875-76e7684265f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhcmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""  />
  // ]

  const [auth, setAuth] = useAuth();
  console.log(auth?.user?.name, "auth");
  return (
    <>
      <Navbar />
      <h1> Welcome to Homepage</h1>
      <h1>{JSON.stringify(auth?.user, null, 4)}</h1>
      {/* <AliceCarousel mouseTracking items={items} /> */}
    </>
  );
};
