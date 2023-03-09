import profileImage from '../images/gato_ti.jpg';


export default function Inicio() {
    return (
        <div>
            <img className='profileImage' src={profileImage}/>
            <p className="contentIni">Donec nunc felis, fringilla sit amet felis eu, lobortis tempor lectus. Donec mollis, mauris quis viverra ultricies, tortor ante egestas diam, sed egestas justo metus nec diam. Integer tempor vel lorem a imperdiet. Pellentesque id odio at metus rhoncus tempus quis volutpat orci. Proin nec maximus nibh. Aliquam molestie magna id tortor elementum rhoncus. Vestibulum elementum dictum nibh eget semper.
            Cras ligula nibh, cursus ac neque vel, vulputate ultricies metus. Mauris neque nunc, dignissim vitae nunc sit amet, ultrices malesuada lacus. In id eros a erat semper feugiat eu sagittis diam. Donec molestie pellentesque fringilla. Vestibulum dignissim erat non orci.
            </p>
        </div>
    )
}