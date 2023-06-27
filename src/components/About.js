import profile from '../images/profile.jpg'

const About = () => {
    return (
        <>
            <h1 className='drop-shadow-md text-primary md:text-[70px]'>About Me</h1>
            <h2 className='pt-2 text-primary'>Something little about me</h2>
            <div className="md:grid md:grid-cols-2 md:gap-4">
                <div>
                    <p className='text-white pt-10'>A final year student who is enrolled in the Computer Science and Information Technology programme. Dedicated to Cyber Security and Web Development, having two or more years of expertise, and specialising in web development, algorithms, penetration testing and docker containerization. Searching mostly for Cyber Security Analyst, Pen-Tester and Web Developement positions.</p>
                    {/* <p className='text-white pt-4'>Sed ut libero id purus volutpat pharetra. In hac habitasse platea dictumst. Fusce a laoreet lorem. Mauris semper mauris eget lorem porttitor laoreet. Vivamus nulla ligula, viverra et venenatis ac, suscipit a augue. Aliquam iaculis, dui in consequat hendrerit, metus nulla sodales diam, et auctor risus sem eget velit. Sed non nisi pretium, gravida turpis et, consectetur eros. Nunc id urna erat.</p> */}
                </div>
                <div className='relative flex justify-center'>
                    <img className='w-4/6 p-1 bg-border mt-10' src={profile} alt="Profile pic" />;
                </div>
            </div>
        </>
    )
}

export default About;