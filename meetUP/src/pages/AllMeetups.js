import { useState, useEffect } from 'react'; 
import MeetupList  from "../components/meetups/MeetupList";

function AllMeetupsPage() {
const [isLoading,setIsLoading] = useState(true);
const [loadedMeetups, setLoadedMeetups] = useState([]);

  let url = "https://meetup-react-17321-default-rtdb.firebaseio.com/meetups.json";

  useEffect(() => {
    setIsLoading(true);
    fetch(url).then(response => {
      return response.json();
     }).then(data => {
       const meetups = [];
       for(const key in data) {
         const meetup = {
            id: key,
            ...data[key]
         };

         meetups.push(meetup);

       }
       setIsLoading(false);
       setLoadedMeetups(meetups);
     });
  }, []);


  if(isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
    //get a list of meetups


 return(<section>
     <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups}/>
 </section>)
}

export default AllMeetupsPage;