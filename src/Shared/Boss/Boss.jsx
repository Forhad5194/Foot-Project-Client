import img1 from "../../assets/home/chef-service.jpg"
const Boss = () => {
    return (
        <section>
            <div className="relative">
            <div  >
               <img  src={img1} alt="" />
            </div>
            <div className="bg-white rounded-xl  mx-auto w-[1096px] h-[333.667px] absolute top-10  text-center  p-10 left-12" >


                <h2 className="text-xl font-bold mb-5 mt-[96px]">Bistro Boss</h2>
                <p className="text-neutral font-normal ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum <br /> deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto <br /> ducimus incidunt quibusdam nemo.</p>

            </div>
            </div>
        </section>
    );
};

export default Boss;