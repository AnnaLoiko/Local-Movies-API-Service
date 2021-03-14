import React, {useState, useCallback} from "react";
import style from "./style.module";

import MovieAdd from '@/main/MovieAdd/MovieAdd';
import Search from "@/components/Search/Search";
import Button from "@/components/Button/Button";
import Layout from "@/components/Layout/Layout";

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);

  // const handleClick = () => {
  //   setOpenModal(true)
  // };

  const handleClick = useCallback(() => {
    setOpenModal(true)
  }, []);

  return (
    <>
      <Layout>
        <div className={style.addMovieBtnWrap}>
          <Button
            handleClick={handleClick}
            text="+ Add movie"
            className="btnSecondary"
          />
        </div>

        <div className={style.topContentWrap}>
          <h1 className={style.h1}>Find your movie</h1>
          <Search />
        </div>
      </Layout>

      <MovieAdd
        title="Add movie"
        isOpen={openModal}
        clickCloseModal={() => setOpenModal(false)}
      />
    </>
  );
}

export default HomePage;
 











// import React, {useState} from "react";
// import style from "./style.module";

// import MovieAdd from '@/main/MovieAdd/MovieAdd';
// import Search from "@/components/Search/Search";
// import Button from "@/components/Button/Button";
// import Layout from "@/components/Layout/Layout";

// const HomePage = () => {
//   const [openModal, setOpenModal] = useState(false);

//   return (
//     <>
//       <Layout>
//         <div className={style.addMovieBtnWrap}>
//           <Button
//             onClick={() => setOpenModal(true)}
//             text="+ Add movie"
//             className="btnSecondary"
//           />
//         </div>

//         <div className={style.topContentWrap}>
//           <h1 className={style.h1}>Find your movie</h1>
//           <Search />
//         </div>
//       </Layout>

//       <MovieAdd
//         title="Add movie"
//         isOpen={openModal}
//         clickCloseModal={() => setOpenModal(false)}
//       />
//     </>
//   );
// }

// export default HomePage;
