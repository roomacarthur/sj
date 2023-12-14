import React from 'react'
import Navbar from "./components/Navbar"

function page() {
  return (
    <main>
      <div>
        <h1>
          “Our clients understand that Communication, Preparation and Care are
          our core values enabling them to enjoy quality long lasting decorative
          finishes”
        </h1>
      </div>
      <hr></hr>
      <div>
        <p>
          At Southgate and James we continuously provide high quality interior
          decorating services to both private clients and interior designers
          alike. We take time to understand our clients wishes, enabling us to
          consult, advise and undertake all our decorative finishes to the
          highest possible standards. Our services include all types of paint
          finishes, paper hanging, colour consultancy and advice. Based in North
          Yorkshire, our work sees us travel extensively throughout the UK and
          abroad. We look forward to working with you on your forthcoming
          projects. Please feel free to contact us.
        </p>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          Contact Us
        </button>
      </div>
    </main>
  );
}

export default page