export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <p>
        Hello There ✋✋ , This is Alaa Bourega a Mern stack developer <b></b>
          to be honest i dont love frontend but i am forced to do xddd<b></b>
            This is a test project for deploying on Netlify , this project will be my portfolio later i guess
            if you want to contact me for business you can find me here<b></b>
              <a href="https://www.instagram.com/alaabo.dng/">
          @alaabo.dng
        </a>
      </p>

      <p>
        You can find the code for this project on GitHub at{"/nextjs-toolbox"}
        <a href="https://github.com/Alaabo/nextjs-toolbox">
          Click Here and i will take you dw 
        </a>
        ! Happy coding!
      </p>
    </>
  );
}
