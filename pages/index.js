// import React, {useEffect, useContext, useState} from 'react';

// //Internal Import

// import { CrowdFundingContext } from '../Context/CrowdFunding';
// import {Hero, Card, PopUp} from '../Components';

// const index = () => {
//   const{
//     titleData,
//     getCampaigns,
//     createCampaign,
//     donate,
//     getUserCampaigns,
//     getDonations,
//   } = useContext(CrowdFundingContext);

//   const[allcampaigns, setAllCampaigns] = useState();
//   const[usercampaign, setUserCampaign] = useState();

//   useEffect(() => {
//     const getCampaignsData = getCampaigns();
//     const userCampaignsData = getUserCampaigns();
//     return async () => {
//       const allData = await getCampaignsData;
//       const userData = await userCampaignsData;
//       setAllCampaigns(allData);
//       setUserCampaign(userData);
// };
//   }, []);

//   //Donate Popup model
//   const [openModel, setOpenModel] = useState(false);
//   const [donateCampaign, setDonateCampaign] = useState();

//   console.log(donateCampaign);
//   return (
//     <>
//     <Hero titleData={titleData} createCampaign={createCampaign} />
//     <Card
//       title = "All Campaigns"
//       allcampaigns = {allcampaigns}
//       setOpenModel = {setOpenModel}
//       setonate={setDonateCampaign}
//     />
//     <Card
//     title="Your Created Campaign"
//     allcampaigns={usercampaign}
//     setOpenModel={setOpenModel}
//     setDonate={setDonateCampaign}
//     />

//     {openModel && (
//       <PopUp
//       setOpemModel={setOpenModel}
//       getDonations={getDonations}
//       donate={donateCampaign}
//       donateFunction= {donate}
//       />
//     )}
//     </>
//   );
// };

// export default index
import React, { useEffect, useContext, useState } from 'react';
import { CrowdFundingContext } from '../Context/CrowdFunding';
import { Hero, Card, PopUp } from '../Components';

const Index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);

  const [allcampaigns, setAllCampaigns] = useState([]);
  const [usercampaign, setUserCampaign] = useState([]);
  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const allData = await getCampaigns();
      const userData = await getUserCampaigns();
      setAllCampaigns(allData);
      setUserCampaign(userData);
    };

    fetchData();
  }, [getCampaigns, getUserCampaigns]);

  return (
    <>
      <Hero titleData={titleData} createCampaign={createCampaign} />
      <Card
        title="All Campaigns"
        allcampaigns={allcampaigns}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />
      <Card
        title="Your Created Campaign"
        allcampaigns={usercampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      {openModel && (
        <PopUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  );
};

export default Index;
  