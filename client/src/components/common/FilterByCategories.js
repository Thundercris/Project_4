// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const FilterCategory = () => {

//   const [count, setCount]  = useState(0)

//   const [getData, setGetData] = useState(null)
//   const [hasError, setHasError] = useState(false)

//   useEffect(() => {
//     const gettingData = async () => {
//       try {
//         const { data } = await axios.get('api/categories')
//         setGetData(data)
//         console.log(data)
//       } catch (err) {
//         console.log(err)
//       }
//     }
//   })

//   return (
//     <h1>Something</h1>
//   )
// }
// export default FilterCategory




// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const FilterCategory = () => {

//   const [count, setCount]  = useState(0)

//   const [findData, setFindData] = useState(null)
//   const [hasError, setHasError] = useState(false)

//   useEffect(() => {
//     const gettingData = async () => {
//       try {
//         const { data } = await axios.get('api/categories')
//         setFindData(data)
//         console.log(data[0].places[0].name)
//       } catch (err) {
//         console.log(err)
//       }
//     }
//     gettingData()
//   },[count])
//   // console.log(getData)

//   return (
//     <>
//       {findData ?
//         <>
//           {findData.map((item) => { 
//             return (
//               <>
//                 <p>SOMETHING:</p>
//                 <p>SOMETHING:</p>
//                 <p>SOMETHING:</p>
//                 <p>SOMETHING:</p>
//                 <p>SOMETHING:</p>
//                 <p>SOMETHING:</p>
//                 <p>SOMETHING:</p>
//                 <p>SOMETHING:</p>
//                 <p>SOMETHING:</p>
//                 <p>SOMETHING:</p>
//                 <p>SOMETHING:{item[0]}</p>
//               </>
//             )}
//           )}
//         </>
//         :
//         <section>
//           <h1>{hasError ? 'Something has gone wrong' : 'Loading...'}</h1>
//         </section>
//       }
//     </>
//   )
// }
// export default FilterCategory