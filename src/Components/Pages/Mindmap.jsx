import React,{useState} from 'react'
import Navbar from '../MajorComponents/Navbar/navbar'
import Img from '../../assests/images/mindmap/gmanifesto2.png'
import Img01 from '../../assests/images/mindmap/beans.png'
import Img02 from '../../assests/images/mindmap/community.png'
import Img03 from '../../assests/images/mindmap/meta3.png'
import Img04 from '../../assests/images/mindmap/shirts.png'
import Img05 from '../../assests/images/mindmap/bridge.png'
import Img06 from '../../assests/images/mindmap/seedlings.png'
import Img07 from '../../assests/images/mindmap/brainwhite.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'

function Mindmap() {
    let handleDetailPage1=()=>{
        var DetailPage=document.querySelector(".page01Detail").style
        DetailPage.visibility="visible"
    }
    let handleCloseDetail=()=>{
        var DetailPage=document.querySelector(".page01Detail").style
        DetailPage.visibility="hidden"
    }
    let handleDetailPage2=()=>{
        var DetailPage=document.querySelector(".page02Detail").style
        DetailPage.visibility="visible"
    }
    let handleCloseDetail2=()=>{
        var DetailPage=document.querySelector(".page02Detail").style
        DetailPage.visibility="hidden"
    }
    let handleDetailPage4=()=>{
        var DetailPage=document.querySelector(".page04Detail").style
        DetailPage.visibility="visible"
    }
    let handleCloseDetail4=()=>{
        var DetailPage=document.querySelector(".page04Detail").style
        DetailPage.visibility="hidden"
    }
    let handleDetailPage6=()=>{
        var DetailPage=document.querySelector(".page06Detail").style
        DetailPage.visibility="visible"
    }
    let handleCloseDetail6=()=>{
        var DetailPage=document.querySelector(".page06Detail").style
        DetailPage.visibility="hidden"
    }
    const [check,setCheck]=useState(0)
    let handleSubmit=()=>{
        var inpDiv=document.querySelector(".submit").style
        inpDiv.visibility="visible"
        setCheck(1)
    }
    let handleDetailPage7=()=>{
        var DetailPage=document.querySelector(".page07Detail").style
        DetailPage.visibility="visible"
    }
    let handleCloseDetail7=()=>{
        var DetailPage=document.querySelector(".page07Detail").style
        DetailPage.visibility="hidden"
    }
    return (
        <div className="mindmap pb-5">
            <Navbar/>
            <div className="container-fluid d-flex justify-content-between">
                <div className="col-6 pr-3 pl-4 mt-5 pt-5">
            <h1 className="heading2 pt-3">MINDMAP <span className="head2">//</span></h1>
            <p className="mindmap-detail">We are guided by a simple yet profound vision - create the largest decentralized brand for the metaverse that is built and owned by the community.</p>
            </div>
            <div className="col-6 d-flex justify-content-end">
                <img src={Img} className="mindmap-img" alt="" srcset="" />
            </div>
        </div>
        <div className="grid-box px-4 mt-2 mb-5 pb-5 grandParent">
            <div className="pl-4 parent">
                <div className="vision mb-2 parent01" onClick={handleDetailPage1} id="detailPage01">
                    <img className="Img01" src={Img01} alt="" srcset="" />
                    <div className="ImgNo">
                        <h1>01</h1>
                        <h6>VISION & VALUES <span className="ml-2 arrowIcon1"><AiOutlineArrowRight/></span></h6>
                    </div>
                </div>
                <div className="community mt-2 parent02" onClick={handleDetailPage2}>
                <img className="Img02" src={Img02} alt="" srcset="" />
                <div className="ImgNo">
                        <h1>02</h1>
                        <h6>COMMUNITY <span className="ml-2 arrowIcon2"><AiOutlineArrowRight/></span></h6>
                    </div>
                </div>
            </div>
            <div className="">
            <div className="metaverse mb-2 parent03">
            <img className="Img03" src={Img03} alt="" srcset="" />
            <div className="ImgNo">
                        <h1>03</h1>
                        <h6>METAVERSE <span className="ml-2 arrowIcon3"><AiOutlineArrowRight/></span></h6>
                    </div>
            </div>
                <div className="physical mt-2 parent04" onClick={handleDetailPage4}>
                <img className="Img04" src={Img04} alt="" srcset="" />
                <div className="ImgNo">
                        <h1>04</h1>
                        <h6>PHYSICAL WORLD <span className="ml-2 arrowIcon4"><AiOutlineArrowRight/></span></h6>
                    </div>
                </div>
            </div>
            <div className="w-100 h-100 d-flex flex-column">
                    <div className="vision2 d-flex mb-2">
                        <div className="col-6 pr-1 pl-0">
                        <div className="vision2-child w-100 h-100 parent05">
                        <img className="Img05" src={Img05} alt="" srcset="" />
                        <div className="ImgNo">
                        <h1>05</h1>
                        <h6>BRIDGE BETWEEN <span className="ml-2 arrowIcon5"><AiOutlineArrowRight/></span></h6>
                    </div>
                        </div>
                        </div>
                        <div className="col-6 m-0 pl-1 pr-0">
                            <div className="vision2-child w-100 h-100 parent06" onClick={handleDetailPage6}>
                            <img className="Img06" src={Img06} alt="" srcset="" />
                            <div className="ImgNo">
                        <h1>06</h1>
                        <h6>SEEDLINGS <span className="ml-2 arrowIcon6"><AiOutlineArrowRight/></span></h6>
                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="community bg-danger m-0 p-0 parent07" onClick={handleDetailPage7}>
                    <img className="Img07" src={Img07} alt="" srcset="" />
                    <div className="ImgNo">
                        <h1 className="img07No">07</h1>
                        <h6 className="text-white">CONNECT YOUR MIND <span className="ml-2 arrowIcon7"><AiOutlineArrowRight/></span></h6>
                    </div>
            </div>
            </div>
            <div className="page01Detail px-4 d-flex">
                <div className="col-7 pt-4 mt-4 ">
                <h1 className="heading3 pt-3">VISION & VALUES <span className="sign">//</span></h1>
                <p className="ourVision mt-4 pt-1">Our Vision: <span className="ourVisionSpan ml-2">Create the largest decentralized brand for the metaverse that is built and owned by the community.</span></p>
                <p className="ourVision mt-4">Values:</p>
                <p className=""><span className="ourCommunity px-1">Community first :</span> <span className="ourVisionSpan ml-2">
                Everything starts and ends with the community. The moment we prioritize something other than the community will be the beginning of the end. <br/> We won't let that happen, because we'll always have community as the #1 value of Azuki.</span></p>
                <p className=""><span className="ourCommunity px-1">Dope sh*t only :</span> <span className="ourVisionSpan ml-2">
                Azuki is creative, brave, relentless. It's easy to follow trends and improve incrementally. It's harder to be original and do dope sh*t. We pave our own path.</span></p>
                <p className=""><span className="ourCommunity px-1">Trust the process :</span> <span className="ourVisionSpan ml-2">
                Good things take time. Decentralized movements can't turn corners as quickly as centralized movements, and that's both a blessing and a curse. Decentralized doesn't mean there can't be leaders. The core team will provide guard rails and resources for all beans to grow together, but it won't happen overnight. !ttp</span></p>
                </div>
                <div className="col-5 mt-4 mb-5 pt-2 d-flex flex-column justify-content-between align-items-end">
                    <div onClick={handleCloseDetail}>
                    <GrClose className="closeDetail"/>
                    </div>
                    <img className="Img01-detail" src={Img01} alt="" />
                </div>
            </div>
            <div className="page02Detail pl-4 mb-3 d-flex">
                <div className="col-7 pt-4 mt-4 ">
                <h1 className="heading3 pt-3 border-bottom pb-3">COMMUNITY <span className="sign">//</span></h1>
                <p className="mt-4"><span className="ourCommunity px-1 py-1">We are the skaters of the internet .</span> <span className="ourVisionSpan ml-2">
                We're skating between the blurred lines of the physical and digital worlds as they are beginning to blend. We are a community of individuals who aren't afraid to push the boundaries, challenge the status quo, and communicate boldly. We're making an impact on web3 culture.</span></p>
                <p className="mt-4 ourVisionSpan">
                To grow our community we will <span className="bold700"> empower creatives from within .</span> We're building out the infrastructure to surface and promote artists. We're already seeing the impact within our community from the support and help that we provide each other. Creative Beans come in all shapes and forms.</p>
                <p className="mt-4 ourVisionSpan">
                 <span className="bold700">Our community stands for web3 and an open internet.</span> We will take steps to educate the community on ways to protect our data and subvert web2 power. We look to lead as well as to back other movements that share a similar vision in censorship-resistance and a decentralized metaverse..</p>
                 <p className="mt-4 ourVisionSpan">
                 Long term we must <span className="bold700">mobilize the community</span> in a scalable way. This means recruiting for Global Ambassadors. Creating meet-up playbooks for ambassadors to run locally. It also means we need to figure out governance for the brand in a way that allows us to take input from the community while also making decisions as efficiently and effectively as possible.</p>
                </div>
                <div className="col-5 mt-4 pt-2 d-flex flex-column justify-content-between align-items-end">
                    <div onClick={handleCloseDetail2}>
                    <GrClose className="closeDetail mr-4"/>
                    </div>
                    <img className="Img02-detail" src={Img02} alt="" />
                </div>
            </div>
            <div className="page04Detail pl-4 mb-3 d-flex">
                <div className="col-7 d-flex align-items-center">
                <div className="pt-4 mt-4 ">
                <h1 className="heading3 pt-3 border-bottom pb-3">PHYSICAL WORLD <span className="sign">//</span></h1>
                <p className="mt-4 page04Text">Streetwear <span className="badge text-white bg-success px-2 ml-2 py-2 rounded">IN PROGRESS</span></p>
                <p className="ourVisionSpan">Members of The Garden can expect exclusive drops in perpetuity. Azuki Shop will be live following the launch. Azuki × <span className="bg-dark text-white px-2 py-1 rounded mt-2 mx-1" id="rotate-text">REDACTED</span> coming soon.</p>
                <p className="page04Text mb-1 pb-0">IRL Events <span className="badge text-white bg-success px-2 ml-2 py-2 rounded">IN PROGRESS</span></p>
                <p className="ourVisionSpan p-0 m-0">Meet-ups, exhibits, music festivals, and more give us the opportunity to expand our reach beyond a purely digital experience.</p>
                <p className="page04Text mb-1 pb-0">Collectibles <span className="badge text-white bg-warning mt-3 px-2 ml-2 py-2 rounded">EXPLORING</span></p>
                <p className="ourVisionSpan p-0 m-0">Physical collectibles, toys, figurines, skateboards... quality > quantity.</p>
                <p className="page04Text mb-1 pb-0">Record Label <span className="badge text-white bg-warning mt-3 px-2 ml-2 py-2 rounded">EXPLORING</span></p>
                <p className="ourVisionSpan p-0 m-0">The music industry is broken. 2022 will be a big year for music NFTs. What can Azuki do to help artists?</p>
                </div>
                </div>
                <div className="col-5 mt-4 pt-2 d-flex flex-column justify-content-between align-items-end">
                    <div onClick={handleCloseDetail4}>
                    <GrClose className="closeDetail mr-4"/>
                    </div>
                    <img className="Img04-detail" src={Img04} alt="" />
                </div>
            </div>
            <div className="page05Detail pl-4 mb-3 d-flex">
                <div className="col-7 d-flex align-items-center">
                <div className="pt-4 mt-4 ">
                <h1 className="heading3 pt-3 border-bottom pb-3">BRIDGE BETWEEN <span className="sign">//</span></h1>
                <p className="ourVisionSpan mt-4">The bridge between the physical and digital world presents a playground to create a new type of media. Here we will experiment with meta-games, interactive experiences, and unique ways to grow an IP. Riot Games has created an interesting playbook of expanding their IP through a show like Arcane. By allowing ownership in the characters themselves, Azuki along with the community is positioned to expand beyond this playbook.</p>
                <p className="mt-4 page04Text mb-1">Meta-games <span className="badge text-white bg-success px-2 ml-2 py-2 rounded">IN PROGRESS</span></p>
                <p className="ourVisionSpan">Micro-actions and games played within the community in order to unlock new experiences.</p>


                <p className="page04Text mb-1 pb-0">An Interactive Brand <span className="badge text-white bg-warning mt-3 px-2 ml-2 py-2 rounded">EXPLORING</span></p>
                <p className="ourVisionSpan p-0 m-0">Imagine an RPG/Anime where the community owns their character(s) and the brand that they are helping build.</p>
                <p className="page04Text text-danger mb-1 pb-0 mt-4">Bobu The Bean Farmer says...</p>
                
                </div>
                </div>
                <div className="col-5 mt-4 pt-2 d-flex flex-column justify-content-between align-items-end">
                    <div onClick={handleCloseDetail6}>
                    <GrClose className="closeDetail mr-4"/>
                    </div>
                    <img className="Img04-detail mb-4" src={Img06} alt="" />
                </div>
            </div>
            <div className="page06Detail pl-4 mb-3 d-flex">
                <div className="col-7 d-flex align-items-center">
                <div className="pt-4 mt-4 ">
                <h1 className="heading3 pt-3 border-bottom pb-3">SEEDLINGS <span className="sign">//</span></h1>
                <p className="ourVisionSpan mt-4">An idea starts as a seed. And together we can cultivate the seedlings which will be most impactful.</p>
                <p className="mt-4 page04Text mb-1">Partnerships <span className="badge text-white bg-success px-2 ml-2 py-2 rounded">IN PROGRESS</span></p>
                <p className="ourVisionSpan">There is a ton of web2 IP which we all know and love, that is sitting dormant waiting for an opportunity to be brought back to life in a new way. We believe web3 and the metaverse has an opportunity to fuel a revival for our most beloved IPs.</p>
                <p className="page04Text mb-1 pb-0">$BEAN <span className="badge text-white bg-warning mt-3 px-2 ml-2 py-2 rounded">EXPLORING</span></p>
                <p className="ourVisionSpan p-0 m-0">A native currency to be used in the Azuki-verse.</p>
                <p className="ourVisionSpan mt-2">Most ERC20 tokens used in NFT projects are securities. They will be subject to SEC rules and regulations when regulators look into the space. Before releasing a token we will need to have extensive conversations with our lawyers to ensure compliance.</p>
                <p className="page04Text mb-1 pb-0">DAO <span className="badge text-white bg-warning mt-3 px-2 ml-2 py-2 rounded">EXPLORING</span></p>
                <p className="ourVisionSpan p-0 mb-5">Experimentation with DAOs is one of the most exciting areas of crypto today. We must start small and explore various governance structures, reiterating on areas that need improvement, before moving onto bigger experiments. The regulatory framework for DAOs is also something that needs more research. A good resource: A Legal Framework for DAOs</p>
                </div>
                </div>
                <div className="col-5 mt-4 pt-2 d-flex flex-column justify-content-between align-items-end">
                    <div onClick={handleCloseDetail6}>
                    <GrClose className="closeDetail mr-4"/>
                    </div>
                    <img className="Img04-detail mb-4" src={Img06} alt="" />
                </div>
            </div>
            <div className="page07Detail pl-4 mb-3 d-flex bg-danger">
                <div className="col-7 d-flex align-items-center">
                <div className="pt-4 w-100 mt-4 ">
                <h1 className="heading3 pt-3 border-bottom pb-3">CONNECT YOUR MIND <span className="sign">//</span></h1>
                <p className="connectText mt-4">"Human history is, in essence, a history of ideas." - H.G. Wells<br/>
                What ideas do you have? Let's write history together.</p>
                <div className="col-12 p-0 m-0 inpParent">
                <textarea type="text" className="col-12 pt-3 h-100 w-100 inp rounded"placeholder="Start typing ..."/>
                <div className="submit rounded"></div>
                </div>
                <div className="position-relative">
                {check==0 &&(
                <button className="mt-4 py-3 bg-dark px-3 text-white submitBtn" onClick={handleSubmit}>SUBMIT IDEA <span><AiOutlineArrowRight/></span></button>
                )}
                {check==1 &&(
                <p className="submitMsg mt-3">Your idea has been submitted.</p>
                )}
                </div>
                </div>
                </div>
                <div className="col-5 mt-4 pt-2 d-flex flex-column justify-content-between align-items-end">
                    <div onClick={handleCloseDetail7}>
                    <GrClose className="closeDetail mr-4"/>
                    </div>
                    <img className="Img07-detail mr-4" src={Img07} alt="" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Mindmap
