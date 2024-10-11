import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  // Call the two functions with appropriate arguments
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then((res) => res.map((item) => ({
      status: item.status,
      value: item.status === 'fulfilled' ? item.value : String(item.reason),
    })));
}

export default handleProfileSignup;
