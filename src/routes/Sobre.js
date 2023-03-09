import gitImage  from '../images/git_edit.png';
import instaImage from '../images/insta_edit.png';
import linkedinImage from '../images/linkedin_edit.png';


export default function Sobre() {
    return (
        <div>
            <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra id arcu a molestie. Sed tincidunt ex vitae nibh gravida fermentum. Nullam aliquam in elit quis varius. Vestibulum eget sollicitudin lectus, quis aliquam sem. Cras posuere vehicula augue, non viverra est scelerisque in. Integer euismod ante in dapibus maximus. Sed ex turpis, cursus id fermentum id, suscipit et neque. Praesent volutpat, eros hendrerit dignissim facilisis, nulla diam dictum lacus, vel hendrerit dolor lacus a diam. Praesent sed purus et lectus imperdiet vestibulum vel non felis. Curabitur vestibulum porttitor tellus, sed placerat mauris ultrices non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus nisi vitae mauris sagittis, vitae ullamcorper eros accumsan. Proin congue, sem tempus sollicitudin ornare, ipsum dolor condimentum ex, sagittis pellentesque magna leo eget elit. Donec convallis, magna at varius ullamcorper, risus elit congue sapien, vel dictum urna nibh eget nulla. Maecenas enim erat, dictum in nisi at, cursus condimentum diam. Morbi tincidunt lectus arcu, ut lobortis mauris feugiat in.
            </p>
            <div className="social-group">
                <img className='git-icon' src={gitImage}/>
                <img className='git-icon' src={instaImage}/>
                <img className='git-icon' src={linkedinImage}/>
            </div>
        </div>
    )
}

