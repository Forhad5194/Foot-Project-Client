

const SectionTitle = ({heading , subHeading }) => {
    return (
        <div className="mx-auto text-center mt-10 w-4/12">
            <p className="text-yellow-400 text-xl font-normal mb-5">{subHeading}</p>
            <h2 className="text-4xl border-y-4 py-4 mb-5" >{heading}</h2>
        </div>
    );
};

export default SectionTitle;