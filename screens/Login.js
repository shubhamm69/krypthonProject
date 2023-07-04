// import * as WebBrowser from 'expo-web-browser';
// import * as Google from 'expo-auth-session/providers/google';
// import { Button } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import Time from "../components/Time"
// import Home from "./Home"
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';

// function Login() {
//   const [userData, setUserData] = useState(null);
//   const [token, setToken] = useState(null);
//   const [request, response, promptAsync] = Google.useAuthRequest({
//     expoClientId: '944421291331-ph3run0s53513cmdk39tm9l9ci2c68a4.apps.googleusercontent.com',
//     androidClientId: '944421291331-vcb2c3jq3vspls0hgm6ctq6ig8k5rbdg.apps.googleusercontent.com',
//     iosClientId: '944421291331-aoepkmr251rf8nr073kg1brgjlet7sl8.apps.googleusercontent.com',
//   });

//   const navigation = useNavigation();

//   useEffect(() => {
//     if (response?.type === 'success') {
//       const { authentication } = response;
//       setToken(authentication?.accessToken);
//     }
//   }, [response]);

//   const getUserInfo = async () => {
//     const res = await fetch("https://www.googleapis.com/oauth2/v1/userinfo?access_token=" + token)
//     const response = await res.json();
//     setUserData(response);
//     navigation.navigate('Home');
//   }

//   return (
//     <SafeAreaView>
//       {userData ? (
//         <Home />
//       ) : (
//         <Button
//           title={token ? "Get User Data" : "Login"}
//           disabled={!request}
//           onPress={() => {
//             if (token) {
//               getUserInfo();
//             } else {
//               promptAsync();
//             }
//           }}
//         />
//       )}
//     </SafeAreaView>
//   );
// }

// export default Login;
