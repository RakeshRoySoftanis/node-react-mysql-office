  export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="next" onClick={onClick}>
            <svg
                width={12}
                height={20}
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M11.2461 10.4805C11.6328 10.0937 11.6328 9.44922 11.2461 9.0625L2.91016 0.683594C2.48047 0.296875 1.83594 0.296875 1.44922 0.683594L0.460938 1.67188C0.0742188 2.05859 0.0742188 2.70312 0.460938 3.13281L7.07813 9.75L0.460938 16.4102C0.0742188 16.8398 0.0742188 17.4844 0.460938 17.8711L1.44922 18.8594C1.83594 19.2461 2.48047 19.2461 2.91016 18.8594L11.2461 10.4805Z"
                fill="#F48039"
                />
            </svg>
        </div>
    );
  }
  
  export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="prev" onClick={onClick}>
            <svg
                width={12}
                height={20}
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M0.460938 9.0625C0.0742188 9.44922 0.0742188 10.0938 0.460938 10.4805L8.79688 18.8594C9.22656 19.2461 9.87109 19.2461 10.2578 18.8594L11.2461 17.8711C11.6328 17.4844 11.6328 16.8398 11.2461 16.4102L4.62891 9.75L11.2461 3.13281C11.6328 2.70312 11.6328 2.05859 11.2461 1.67187L10.2578 0.683594C9.87109 0.296875 9.22656 0.296875 8.79688 0.683594L0.460938 9.0625Z"
                fill="#F48039"
                />
            </svg>
        </div>
    );
  }


  // Expertise

  export function ExpertiseNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" role="presentation" className="owl-next"><span aria-label="Previous" onClick={onClick} >‹</span></button>
    );
  }

  export function ExpertisePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous" onClick={onClick} >‹</span></button>
    );
  }