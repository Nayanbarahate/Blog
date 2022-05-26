import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const DataContext = (props) => {

    const dataObj = [{
        category:"tourism",
        data:[{
            id:1,
            name:"Nepal: The Country Of The MountEverest",
            info:"Visit Nepal",
            img:"https://hippyandhills.com/wp-content/uploads/2019/09/best-trekking-places-in-india-in-october-1024x576.jpg",
            display_text:"A home to several birds and wildlife, this park is a paradise for nature and wildlife lovers, photographers and ornithologists.",
            para1:" At an altitude of more than 900m, it is one of the highest cities, making it the base for many world-famous treks.",
            para2:"Sprawled over its namesake valley surrounded by Himalayan mountains, Kathmandu is Nepal’s capital and most-visited destination, full of ancient temples, golden pagodas, natural beauty and fascinating villages."
        },{
            id:2,
            name:"Sikkim: Valley of Rice",
            info:"visit sikkim",
            img:"https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Gangtok.jpg",
            display_text:"Sikkim is a state in northeast India, bordered by Bhutan, Tibet and Nepal. Part of the Himalayas, the area has a dramatic landscape that includes India’s highest mountain, 8,586m Kangchenjunga. Sikkim is also home to glaciers, alpine meadows and thousands of varieties of wildflowers.",
            para1:"A part of the Eastern Himalaya, Sikkim is notable for its biodiversity, including alpine and subtropical climates, as well as being a host to Kangchenjunga, the highest peak in India and third highest on Earth. Sikkim's capital and largest city is Gangtok. Almost 35% of the state is covered by the Khangchendzonga National Park.",
            para2:"Long a sovereign political entity, Sikkim became a protectorate of India in 1950 and an Indian state in 1975. Its small size notwithstanding, Sikkim is of great political and strategic importance for India because of its location along several international boundaries. Area 2,740 square miles (7,096 square km). Pop. (2011) 607,688."
        },{
            id:3,
            name:"Jaipur:Pink city ",
            info:"Visit Rambagh Palace",
            img:"https://assets.traveltriangle.com/blog/wp-content/uploads/2015/12/rambagh-palace-A-view-of-the-Rambagh-Palace-courtyard-at-night-e1450176910484.jpg",
            display_text:"The city of Jaipur was founded by the King of Amer, Maharaja Sawai Jai Singh II on 18 November 1727, who ruled from 1699 to 1743. He planned to shift his capital from Amer, 11 kilometres (7 mi) to Jaipur to accommodate the growing population and increasing scarcity of water.[12] Jai Singh consulted several books on architecture and architects while planning the layout of Jaipur. Under the architectural guidance of Vidyadhar Bhattacharya, Jaipur was planned based on the principles of Vastu Shastra and Shilpa Shastra",
            para1:"Get ready to dazzle your eyes by visiting Rambagh Palace which is one of the Jaipur famous places. Rambagh Palace, once the residence of the Maharajas, now serves as one of the best hotels in the world.",
            para2:"It was later converted into a hunting lodge and then into the principle residence of Maharaja Sawai Man Singh II, before it was finally converted into a 5-star hotel by the Taj Group and is the best tourist place in Jaipur. All this opulence makes it one of the famous tourist places in Jaipur.  ",
        },{
            id:4,
            name:"Jammu & Kashmir: Heart of India",
            info:"Visit Yusmarg",
            img:"https://www.tourmyindia.com/blog//wp-content/uploads/2020/12/Yusmarg-Jammu-Kashmir.jpg",
            display_text:"Yusmarg is a hill station in the western part of the valley of Kashmir. The Ahmadiyya Muslim community believes it to be the place where Jesus once lived. The landscape here is more beautiful than anything you will ever see.",
            para1:"There are plenty of options for sightseeing and trying out activities like trekking and horse riding.",
            para2:" Let the hands of time which have rested lightly on the chhatris, palaces and forts of Orchha and Gwalior, whisper the tales of medieval India. The temples of Khajuraho are India’s unique gift to the world, representing love and joys of life in a sublime expression."
        },{
            id:5,
            name:"Uttarakhand:KEDARNATH DHAM ",
            info:"KEDARNATH DHAM",
            img:"https://www.tourmyindia.com/chardham/images/kedarnath-dham1.jpg",
            display_text:"Kedarnath Dham, located in the Rudraprayag district of Uttarakhand, is one of the most paramount locations for worshipers of Shiva. The air appears to be reverberating with the name of Lord Shiva amid the mighty snow-clad peaks, enchanting meadows and forests of the lower mountain range of Himalayas. Situated in a breathtaking location, near the source of Mandakini River and at the height of 3,584 meters.",
            para1:"Lingams and is also the most important temple among the Panch Kedars (group of 5 Shiva temples in Garhwal Himalayas).",
            para2:" It is also one of the significant temples of the sacred Chota Char Dham Yatra in Uttarakhand, raising the glory of the place to further heights."
        }]
    },{
        category:"fitness",
        data:[{
            id:6,
            name:"Fitness",
            info:"You must do Exercise",
            img:"https://th.bing.com/th/id/R.7bc92eb826de8a67394a863a7e09caf0?rik=Xb%2ffz%2bk6LgvErw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fc%2f5%2f8%2f53692.jpg&ehk=jCMeEmyOm2%2fycISjOl%2bDWFLgFUFvxEd8UC7Kd6OZ8eo%3d&risl=&pid=ImgRaw&r=0",
            display_text:"Exercise is a mind and body practice. Various styles of yoga combine physical postures, breathing techniques, and meditation or relaxation. Yoga is an ancient practice that may have originated in India. It involves movement, meditation, and breathing techniques to promote mental and physical well-being.",
            para1:"Exercise has been around for millennia. According to some records, it was developed in Northern India over 5,000 years ago, and according to data published in 2004 in the journal Alternative Therapies in Health and Medicine, an estimated 15 million American adults have used yoga at least once in their lifetime.",
            para2:"and more than 7.4 million participated in the year prior to when the research was conducted. Individuals interviewed for this research reported that they used yoga for wellness (stressreduction, quality of life), health conditions, and specific ailments like back or neck pain, and 90% felt yoga was very or somewhat helpful."
        },
        {
            id:7,
            name:"Physical Activity",
            info:"Physical Activity and Covid19 Outcomes",
            img:"https://www.trainabsolute.com/wp-content/uploads/2021/04/covidandexerciseoutcomes-1024x684.jpg",
            display_text:"Those who met or exceeded the recommended 150 minutes of exercise a week saw significantly better outcomes to COVID-19.",
            para1:"“22 minutes a day of moderate exercise led to drastically better outcomes”",
            para2:"The guidelines, which are the same as the World Health Organization guidelines and used by many nations, are based on research supporting the ability of physical activity to boost immune function, reduce systemic inflammation, increase pulmonary and cardiovascular health, and improve mental health. "
        },
        {
            id:8,
            name:"Flexibility ",
            info:"Flexibility training",
            img:"https://bigandripped.com/wp-content/uploads/Flexibility-training.jpg",
            display_text:"People believe if they are able to touch their touch, they are flexible. Nevertheless, it is more about your musculoskeletal health.",
            para1:"Whether people engage in light exercise, such as going for a walk, or high intensity activities, for example, uphill cycling or weight training, regular exercise provides a huge range of benefits for the body and mind.",
            para2:"Taking part in exercise of any intensity every day is essential for preventing a range of diseases and other health issues."
        },{
            id:9,
            name:"Workout Routine",
            info:"Covers articles that help you to learn how to create the workout routine and diet plan you need to lose fat",
            img:"https://th.bing.com/th/id/R.8fd6789d1bcb23426103793c392234c7?rik=94MeXAjbKOVCVQ&riu=http%3a%2f%2fbethanyathleticclub.com%2fwp-content%2fuploads%2f2020%2f02%2ftypes-of-exercise-2-1030x579.png&ehk=UXE3gbnK3KOxSENdSK3YAhax5ivuZy2dRsgR4Noa0Bw%3d&risl=&pid=ImgRaw&r=0",
            display_text:"Covers articles that help you to learn how to create the workout routine and diet plan you need to lose fat, build muscle, and get the best results possible. A Workout Routine provides the best workouts, routines, programs, and plans for your exact weight training goal.",
            para2:"Sprint races can be of various distances from 50 - 400m. The three formats used for the Olympics are: 100m, 200m and 400m. The 100m and 400m races are also conducted in a relay format where a team of four each run a leg and pass a baton from one runner to the next."
        },{
            id:10,
            name:"Aerobic",
            info:"Aerobic are exercises that don't rely on anything but a person's own body weight.",
            img:"https://th.bing.com/th/id/OIP.rlngbQ7CI_sRqtMJ3PvrHQHaD8?w=300&h=182&c=7&r=0&o=5&pid=1.7",
            display_text:"Aerobic is a form of strength training consisting of a variety of movements that exercise large muscle groups, such as standing, grasping, pushing, etc.",
            para1:"Aerobic were developed in ancient Greece and became popular again in the early 19th century. Today, fitness training of athletes, military personnel, law enforcement officers, and people trying to keep in shape use these exercises for warming up for strenuous sports or to help build up their bodies.",
            para2:"he effects of a Aerobic training intervention on posture, strength and body composition found that calisthenics training is an effective training solution to improve posture, strength and body composition without the use of any major training equipment"
        }]
    },{
        category:"food",
        data:[{
            id:11,
            name:"Burger ",
            info:"A vegetarian fast food dish.",
            img:"https://wallpaperforu.com/wp-content/uploads/2020/08/food-wallpaper-20080219233416-scaled.jpg",
            display_text:"Vegan burger. With tomato and lettuce, healthy vegetarian version of classic american fast food French fries with burger. In freeze motion isolated on white",
            para1:"A sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
            para2:"The carbohydrate-rich snack catered to the cotton mill workers of what was then known as Girangaon. This potato dumpling (batata vada) placed inside a pav was quick to make, cheap, and much convenient over the batata bhaji and chapati combination, which couldn't be eaten in overcrowded local trains."
        },{
            id:12,
            name:"Mutton Biryani",
            info:" Biryani is a popular one from the town in Tamil Nadu and boasts of aromatic flavours of the local spices.",
            img:"https://s3images.zee5.com/wp-content/uploads/sites/7/2020/07/mutton-biryani-punjab-grill-scaled.jpg",
            display_text:"A hearty mutton biryani that will amaze your guests! Layers of mutton and saffron-milk infused rice cooked 'dum' style",           
            para1:"A hearty mutton biryani that will amaze your guests! Layers of mutton and saffron-milk infused rice cooked 'dum' style",
            para2:"Mutton Biryani is a popular rice dish made with lamb (mutton), rice, onions, potatoes, tomatoes, yogurt, ginger, garlic, and green chillies. Badshah’s Mutton Biryani spice mix provides the perfect blend of spices to make a flavourful and aromatic rice dish."
        },{
            id:13,
            name:"Dosa",
            info:"Naan is a leavened, oven-baked flatbread. You normally serve Naan with all meals.",
            img:"https://th.bing.com/th/id/R.527cd582e1ca2b8e870299b2b245e4de?rik=0Qzle9DmCPg%2boA&riu=http%3a%2f%2fwww.palmbeachuk.com%2fblog%2fwp-content%2fuploads%2f2016%2f04%2fmasala-dosa-re.jpg&ehk=KCuCr8cfy%2f%2fEseIAYgvYrEdpmqx4fgiQlqfPC3RGxCE%3d&risl=&pid=ImgRaw&r=0",
            display_text:"Dosa is a fermented crepe made from rice batter and black lentils. It is a staple dish in South Indian states of Tamil Nadu, Karnataka, Telangana, Andhra Pradesh and Kerala ",
            para1:"Dosa – a thin and crispy crepe made from rice and urad dal (black lentils), served with Coconut Chutney and Vegetable Sambar is a match made in heaven! This popular breakfast item is not",
            para2:"Dosas are a typical South Indian staple consisting of crepes made from fermented rice and lentils. Highlights Dosa is a staple dish in south India Paired with sambar and chutneys."
        },{
            id:14,
            name:"Tandoori Chicken",
            info:"The chicken is marinated in yogurt and seasoned with the spice mixture tandoori masala.",
            img:"https://th.bing.com/th/id/R.dbe0b9a01d76ff207a5faaeb222c9ea4?rik=A%2fftKwiLPvhhGA&riu=http%3a%2f%2fwww.newideafood.com.au%2fmedia%2f20271%2ftandoori-chicken.jpg&ehk=uH2OIBrhucNwCcgbDi80sfCy5wqrRTMueqKOF7opc4k%3d&risl=&pid=ImgRaw&r=0",
            display_text:"Tandoori chicken is a popular North Indian dish consisting of roasted chicken prepared with yogurt and spices. The name comes from the type of cylindrical clay oven, a tandoor, in which the dish is traditionally prepared.Sounds unbelievable, but historians are said to have found the first evidence of a meat preparation which looked like Tandoori Chicken in the ruins of Harappa.",
            para1:"Sounds unbelievable, but historians are said to have found the first evidence of a meat preparation which looked like Tandoori Chicken in the ruins of Harappa.",
            para2:"Ancient Sanskrit treatise Sushruta Samhita mentions meat marinated with mustard powder and fragrant spices being cooked in clay ovens."
        },{
            id:15,
            name:"Samosa",
            info:"Samsa or samosas with meat and vegetables Samsa or samosas with meat and vegetables on wooden table.",
            img:"https://blog-cdn.healthifyme.com/blog/wp-content/uploads/2018/07/17195616/Samosa-1140x760.jpeg",
            display_text:"A samosa is a fried or baked pastry with a savory filling, including ingredients such as spiced potatoes, onions, peas. It may take different forms, including triangular, cone, or half-moon shapes,",
            para1: "Overhead of samosas Samosa filled with smashed potatoes ,green peas and hot spices",
            para2:"Flaky and crunchy fried samosa are one of the most popular street food snack in North Indian cuisine."
        }]
    },{
        category:"technology",
        data:[{
            id:16,
            name:"Cyber Security",
            info:"Cyber security is the application of technologies.",
            img:"https://th.bing.com/th/id/OIP.kfSiOhD_iBOLlIP3jihNAwHaE8?pid=ImgDet&rs=1",
            display_text:"Computer security, cybersecurity, or information technology security is the protection of computer systems and networks from information disclosure, theft of or damage to their hardware, software, or electronic data, as well as from the disruption or misdirection of the services they provide.It is a mistake to believe that you are of no interest to cyber attackers. Everyone who is connected to the Internet needs cyber security. This is because most cyber attacks are automated and aim to exploit common vulnerabilities rather than specific websites or organisations.",
            para1:"Privacy laws such as the GDPR (General Data Protection Regulation) and DPA (Data Protection Act) 2018 can mean significant fines for organisations that suffer cyber security breaches. There are also non-financial costs to be considered, like reputational damage.",
            para2:"New regulations and reporting requirements make cyber security risk oversight a challenge. The board needs assurance from management that its cyber risk strategies will reduce the risk of attacks and limit financial and operational impacts."
        },{
            id:17,
            name:"Web 3.0",
            info:"Web3 is an idea for a new iteration of the World Wide Web based on blockchain technology.",
            img:"https://assets.weforum.org/article/image/0R7BdnZl_gyeWOKsudAVmI7gNR673V4BIxQM6gwT-FY.png",
            display_text:"Web3 is distinct from Tim Berners-Lee's 1999 concept for a semantic web. In 2006, Berners-Lee described the semantic web as a component of Web 3.0, which is different than the term Web3 in crypto context.The term Web3 was coined by Polkadot founder and Ethereum co-founder Gavin Wood in 2014, referring to a decentralized online ecosystem based on blockchain. In 2021, the idea of Web3 gained popularity. Particular interest spiked toward the end of 2021, largely due to interest from cryptocurrency enthusiasts and investments from high-profile technologists and companies. Executives from venture capital firm Andreessen Horowitz traveled to Washington, D.C. in October 2021 to lobby for the idea as a potential solution to questions about regulation of the web, with which policymakers have been grappling.",
            para1:"Networks like Solana offer several hundred digit millisecond latency and transaction costs of a small fraction of a penny. Unlike the current financial system, users do not have to go through the traditional numerous, friction-filled steps to interact with and participate in the network. All they need to do is download or install a wallet, and they can start sending and receiving payments without any gatekeeping.These systems are overly complex and still do not enable true international interoperability between participants. They also require you to hand over your sensitive information and personal data in order to use them.Crypto wallets like MetaMask and Torus enable you to integrate easy, anonymous, and secure international payments and transactions into web3 applications.",
            para2:"To get the money, they take on venture capital and give away a percentage of the company. This investment immediately introduces mis-aligned incentives that will, in the long run, not align well with building out the best user experience."
        },{
            id:18,
            name:"Cryptocurrency",
            info:"A cryptocurrency is an encrypted data string that denotes a unit of currency.",
            img:"https://www.howtogeek.com/wp-content/uploads/2021/08/shutterstock_1434643079.jpg?height=200p&trim=2,2,2,2",
            display_text:"A cryptocurrency is an encrypted data string that denotes a unit of currency. It is monitored and organized by a peer-to-peer network called a blockchain, which also serves as a secure ledger of transactions, e.g., buying, selling, and transferring. Unlike physical money, cryptocurrencies are decentralized, which means they are not issued by governments or other financial institutions. Cryptocurrencies are created (and secured) through cryptographic algorithms that are maintained and confirmed in a process called mining, where a network of computers or specialized hardware such as application-specific integrated circuits (ASICs) process and validate the transactions. The process incentivizes the miners who run the network with the cryptocurrency.",
            para1:"Individual coin ownership records are stored in a digital ledger, which is a computerized database using strong cryptography to secure transaction records, to control the creation of additional coins, and to verify the transfer of coin ownership. Despite their name, cryptocurrencies are not necessarily considered to be currencies in the traditional sense and while varying categorical treatments have been applied to them, including classification as commodities, securities, as well as currencies, cryptocurrencies are generally viewed as a distinct asset class in practice.",
            para2:"Some crypto schemes use validators to maintain the cryptocurrency. In a proof-of-stake model, owners put up their tokens as collateral. In return, they get authority over the token in proportion to the amount they stake. Generally, these token stakers get additional ownership in the token over time via network fees, newly minted tokens or other such reward mechanisms."
        },{
            id:19,
            name:"Artificial intelligence",
            info:"Artificial intelligence is intelligence demonstrated by machines.",
            img:"https://www.sciencenewsforstudents.org/wp-content/uploads/2021/08/LL_AI_feat-1030x580.jpg",
            display_text:"Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to natural intelligence displayed by animals including humans. Leading AI textbooks define the field as the study of intelligent agents: any system that perceives its environment and takes actions that maximize its chance of achieving its goals.Some popular accounts use the term artificial intelligence to describe machines that mimic cognitive functions that humans associate with the human mind, such as learning and problem solving, however, this definition is rejected by major AI researchers.",
            para1:"The major limitation in defining AI as simply building machines that are intelligent is that it doesn't actually explain what artificial intelligence is? What makes a machine intelligent? AI is an interdisciplinary science with multiple approaches, but advancements in machine learning and deep learning are creating a paradigm shift in virtually every sector of the tech industry. ",
            para2:"However, decades before this definition, the birth of the artificial intelligence conversation was denoted by Alan Turing's seminal work, Computing Machinery and Intelligence (PDF, 89.8 KB)(link resides outside of IBM), which was published in 1950. In this paper, Turing, often referred to as the father of computer science, asks the following question, Can machines think?  From there, he offers a test, now famously known as the Turing Test, where a human interrogator would try to distinguish between a computer and human text response. While this test has undergone much scrutiny since its publish, it remains an important part of the history of AI as well as an ongoing concept within philosophy as it utilizes ideas around linguistics."
        },{
            id:20,
            name:"IOT: Internet Of Things",
            info:"The Internet of Things (IoT) describes the network of physical objects—“things”—that are embedded with sensors.",
            img:"https://blog.trndigital.com/hs-fs/hubfs/Internet%20of%20Things.jpeg?width=3840&name=Internet%20of%20Things.jpeg",
            display_text:"The Internet of things (IoT) describes physical objects (or groups of such objects) that are embedded with sensors, processing ability, software, and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks. Internet of Things has been considered a misnomer because devices do not need to be connected to the public internet, they only need to be connected to a network and be individually addressable.",
            para1:"The field has evolved due to the convergence of multiple technologies, including ubiquitous computing, commodity sensors, increasingly powerful embedded systems, and machine learning. Traditional fields of embedded systems, wireless sensor networks, control systems, automation (including home and building automation), independently and collectively enable the Internet of things. In the consumer market, IoT technology is most synonymous with products pertaining to the concept of the smart home, including devices and appliances (such as lighting fixtures, thermostats, home security systems and cameras, and other home appliances) that support one or more common ecosystems, and can be controlled via devices associated with that ecosystem, such as smartphones and smart speakers. IoT is also used in healthcare systems.",
            para2:"There are a number of concerns about the risks in the growth of IoT technologies and products, especially in the areas of privacy and security, and consequently, industry and governmental moves to address these concerns have begun, including the development of international and local standards, guidelines, and regulatory frameworks."
        }]
    }]

    const [data] = useState(dataObj);
    return (
        <>
        <BlogContext.Provider value = {data}>
            {props.children}
        </BlogContext.Provider>
        </>
    )
}