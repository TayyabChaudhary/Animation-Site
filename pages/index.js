import React from 'react'
 import Head from 'next/head';
 import Mainpage from './Container/MAinpage/mainpage';

function Index() {
    return (
        <div>
            <Head>
                 <title>Tayy Eb Chaudhary</title>
                 <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                 <link rel="icon" href="https://tapsbargrill.com/wp-content/uploads/2019/06/TapsBG-Logo-300_fb3229afb653e0be98dc57fe9a5e5e00.png" type="image/gif" sizes="16x16"/>
                 <link rel="icon" href="https://tapsbargrill.com/wp-content/uploads/2019/06/TapsBG-Logo-300_fb3229afb653e0be98dc57fe9a5e5e00.png" type="image/gif" sizes="16x16"/>
                 <link rel="icon" href="https://tapsbargrill.com/wp-content/uploads/2019/06/TapsBG-Logo-300_fb3229afb653e0be98dc57fe9a5e5e00.png" type="image/gif" sizes="16x16"/>
                 {/* <link rel="icon" href="https://tapsbargrill.com/wp-content/uploads/2019/06/TapsBG-Logo-300_fb3229afb653e0be98dc57fe9a5e5e00.png" type="image/gif" sizes="16x16"/> */}
                 {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/> */}
                 {/* <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script> */}
                 {/* <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script> */}
                 {/* <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>           <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/> */}
                 {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script> */}
                 <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
                 {/* <script src="https://code.jquery.com/jquery-3.4.1.js"></script>  */}
                 <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

        </Head>
               <Mainpage/>

        </div>
    )
}

export default Index;

