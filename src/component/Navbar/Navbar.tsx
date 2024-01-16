import styles from './Navbar.module.css';
import NavMenu from '../NavMenu/NavMenu';

function Navbar() {
  return (
    <nav>
      <div className={styles.logoNavMenu}>
        <svg
          viewBox="0 0 305 154"
          role="img"
          className={styles.desktopLogo}
          aria-labelledby="ds-economist-logo-title"
        >
          <title>The Economist</title>
          <path fill="#E3120B" d="M.032 153.503h304.925V.29H.032z"></path>
          <path
            d="M140.895 31.914l.182 7.396-1.723.09c-.136-4.526-1.09-5.144-7.97-5.144h-1.472v25.91c0 3.579.91 4.527 4.435 4.626l.088 1.237c-3.337-.044-5.868-.044-7.474-.044-1.689 0-4.312 0-7.751.044l.088-1.237c3.534-.099 4.446-1.047 4.446-4.627v-25.91h-1.721c-7.067 0-8.022.619-8.113 5.145l-1.713-.09.17-7.396c6.45.043 11.277.102 14.515.102 3.03 0 7.751-.059 14.013-.102M143.753 64.883c3.199 0 3.63-.619 3.678-5.101V38.17c-.048-4.491-.48-5.113-3.678-5.113l-.096-1.145c4.348-.234 5.344-.382 9.27-1.09v14.693c2.527-2.723 4.584-3.82 7.404-3.82 4.672 0 7.255 2.864 7.255 8.305v9.782c.048 4.482.478 5.101 3.67 5.101l.082 1.146c-2.747-.09-4.848-.19-6.233-.19-1.346 0-3.303.1-5.927.19l.1-1.146c2.524-.377 2.766-.847 2.813-5.101V52.62c0-6.012-1.045-8.009-4.198-8.009-1.678 0-3.488 1.088-4.251 2.763-.287.574-.479 1.187-.671 1.808-.044.248-.044.43-.044.527v10.073c0 4.254.287 4.724 2.806 5.101l.103 1.146c-2.673-.09-4.64-.19-5.97-.19-1.385 0-3.489.1-6.209.19l.096-1.146M179.025 50.863c4.387-.098 5.722-.203 10.076-.674-.574-4.627-2.312-6.825-5.26-6.825-2.864 0-4.345 2.286-4.816 7.5m15.137 10.488c-2.964 3.678-5.87 5.21-9.609 5.21-6.628 0-11.115-4.87-11.115-11.99 0-7.672 4.63-12.879 11.31-12.879 3.59 0 6.173 1.331 7.938 4.153 1.191 2.009 1.521 3.387 1.566 6.827h-15.091c.2 7.158 2.817 11.258 7.18 11.258 2.57 0 4.764-1.195 7.108-3.91l.713 1.331M18.235 110.135c3.874-.099 4.878-1.155 4.878-5.127v-24.84c0-3.967-1.004-5.022-4.878-5.132l-.154-1.28 8.12.102 12.84-.162 3.38.06.21 7.68-2.118.16c-.365-4.808-1.264-5.337-8.798-5.337h-1.17l-.528.046v14.3c.996 0 1.804.056 2.282.056a38.02 38.02 0 0 0 2.437.098c4.142 0 5.097-.89 5.141-4.823h1.807c-.16 3.148-.16 4.778-.16 6.362 0 1.274 0 3.062.053 5.44h-1.7c-.208-3.793-1.06-4.538-5.034-4.585l-2.867-.06-2.012.107v11.07c0 4.502.263 4.71 4.716 4.71 5.891 0 7.643-1.324 8.164-6.367l2.12.113-1.219 8.787-4.076.057-12.879-.104-8.71.047.155-1.378M71.709 107.761c-3.017 3.122-5.417 4.34-8.906 4.34-6.983 0-11.458-5.449-11.458-13.66 0-8.57 4.726-13.937 12.356-13.937 2.01 0 4.042.37 7.177 1.22l.09 6.254-2.382.16c-.885-4.669-1.815-5.78-4.885-5.78-3.966 0-6.03 3.451-6.03 10.273 0 7.96 2.478 12.455 6.984 12.455 2.329 0 4.197-1.009 6.266-3.228l.788 1.903M83.847 98.75c.526 7.476 3.017 11.545 7.092 11.545 3.81 0 6.093-3.96 6.093-10.535 0-7.824-3.135-13.246-7.469-13.246-3.861 0-5.827 3.249-5.827 9.862 0 .795 0 1.586.111 2.375m-6.482.587v-.803c0-8.932 4.812-14.03 12.994-14.03 7.59 0 12.987 5.63 12.987 13.82 0 8.219-5.243 13.777-13.146 13.777-7.542 0-12.568-5.08-12.835-12.764M109.6 110.247c3.453 0 3.978-.69 3.978-5.657V92.4c0-4.824-.525-5.513-3.978-5.567l-.106-1.213c4.617-.266 5.684-.426 9.698-1.275l.271 4.687c3.017-3.309 5.345-4.528 8.485-4.528 5.143 0 8.048 3.338 8.048 9.227v10.86c-.048.416-.048.843-.048 1.267 0 3.385.897 4.389 4.13 4.389l.104 1.266c-3.07-.101-5.4-.21-6.937-.21-1.48 0-3.704.109-6.526.21l.093-1.266c2.729-.427 3.042-.95 3.042-5.657l.058-3.244v-4.714c0-6.657-1.22-8.79-4.571-8.79-2.07 0-3.816 1.06-4.874 2.978-.423.794-.79 2.055-.79 2.591v11.18c.052 4.707.318 5.23 3.121 5.656l.163 1.266c-2.966-.101-5.189-.21-6.671-.21-1.542 0-3.803.109-6.796.21l.106-1.266M151.208 98.75c.534 7.476 3.014 11.545 7.007 11.545 3.812 0 6.09-3.96 6.09-10.535 0-7.824-3.122-13.246-7.433-13.246-3.806 0-5.765 3.249-5.765 9.862 0 .795 0 1.586.1 2.375m-6.564.587v-.803c0-8.932 4.824-14.03 12.997-14.03 7.676 0 13.068 5.63 13.068 13.82 0 8.219-5.239 13.777-13.227 13.777-7.49 0-12.57-5.08-12.838-12.764M176.631 110.247c3.555 0 4.085-.69 4.085-5.657V92.4c0-4.824-.53-5.513-4.085-5.567l-.107-1.213c4.713-.266 5.783-.426 9.775-1.275l.237 4.687c2.979-3.254 5.313-4.528 8.435-4.528 3.6 0 5.712 1.484 7.214 4.94 3.235-3.62 5.612-4.94 8.846-4.94 4.996 0 7.793 3.388 7.793 9.227v10.86c0 .416-.053.843-.053 1.267 0 3.385.959 4.389 4.13 4.389l.115 1.266c-3.075-.101-5.403-.21-6.894-.21-1.435 0-3.614.109-6.521.21l.105-1.266c2.802-.427 3.069-.95 3.121-5.657v-7.958c0-6.554-1.152-8.79-4.445-8.79-1.957 0-3.972 1.19-4.819 2.978-.266.63-.526 1.27-.685 2.011-.054.262-.11.474-.11.58v11.18c0 4.707.318 5.23 3.121 5.656l.115 1.266c-2.807-.101-4.87-.21-6.271-.21-1.372 0-3.442.109-6.196.21l.111-1.266c2.805-.427 3.07-.95 3.115-5.657v-7.958c0-6.554-1.158-8.79-4.447-8.79-2.001 0-3.806 1.107-4.813 2.978-.426.843-.767 2.055-.767 2.591v11.18c.053 4.707.29 5.23 3.098 5.656l.106 1.266c-2.914-.101-5.052-.21-6.528-.21-1.543 0-3.814.109-6.888.21l.107-1.266M231.001 75.52a3.498 3.498 0 0 1 3.502-3.51c1.965 0 3.547 1.629 3.547 3.51 0 2.002-1.531 3.595-3.547 3.595-2.01 0-3.502-1.537-3.502-3.595m6.783 8.825v17.001l.05 3.244c0 4.966.485 5.655 4.078 5.655l.111 1.268c-3.288-.101-5.669-.209-7.307-.209-1.585 0-3.908.108-7.112.209l.1-1.268c3.496 0 3.995-.689 3.995-5.655l.049-3.244V95.79l-.049-3.388c0-4.826-.5-5.515-3.995-5.568l-.1-1.215c4.784-.315 5.889-.478 10.18-1.274M248.398 110.566l-.208-5.404 2.695-.099c1.219 4.074 2.017 4.864 4.825 4.864 2.43 0 4.024-1.266 4.024-3.168 0-1.807-1.11-3.119-4.453-5.36-1.69-1.164-2.852-1.965-3.486-2.435-1.382-1.057-2.387-2.332-2.918-3.754-.324-.796-.479-1.744-.479-2.857 0-4.719 3.292-7.849 8.261-7.849 1.851 0 2.912.158 7.112 1.164l.115 5.256-2.691.11c-.6-3.458-1.675-4.676-4.16-4.676-2.383 0-4.081 1.378-4.081 3.243 0 1.849.853 2.96 3.604 4.706 2.484 1.645 4.387 3.12 5.68 4.285 1.485 1.426 2.336 3.224 2.336 5.225 0 4.677-3.93 8.284-8.97 8.284-1.955 0-3.809-.435-7.206-1.535M270.18 86.043c4.176-.32 5.756-2.113 6.954-7.622h2.38v7.145h6.676l-.746 2.909h-5.93v12.924c0 6.42.851 7.947 4.45 7.947.844 0 1.635-.104 2.912-.47v1.53c-1.797 1.007-4.285 1.586-6.823 1.586-2.343 0-4.513-1.318-5.423-3.28-.796-1.64-1.056-3.278-1.056-6.787v-13.45h-3.394v-2.432"
            fill="#FFF"
          ></path>
        </svg>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          role="img"
          className={styles.mobileLogo}
          aria-labelledby="ds-monogram-square-title"
        >
          <title id="ds-monogram-square-title">The Economist</title>
          <path fill="#E3120B" d="M0 79.996h80V0H0z"></path>
          <path
            d="M57.703 53.28l-1.595 11.65-5.34.07-16.99-.139-11.511.07.208-1.803c5.062-.14 6.38-1.526 6.38-6.727V23.6c0-5.2-1.318-6.588-6.38-6.727l-.208-1.803 10.749.14L49.936 15l4.439.07.277 10.194-2.774.208c-.485-6.311-1.664-7.004-11.65-7.004h-1.526l-.694.069v18.862c1.318 0 2.358.07 2.983.07 1.11.07 2.15.139 3.19.139 5.547 0 6.796-1.18 6.865-6.45h2.358c-.208 4.23-.208 6.38-.208 8.46 0 1.665 0 4.023.07 7.143h-2.22c-.277-4.993-1.387-5.964-6.727-6.033l-3.744-.07-2.636.14V55.43c0 5.894.347 6.172 6.172 6.172 7.836 0 10.125-1.734 10.818-8.46l2.774.138"
            fill="#FFF"
          ></path>
        </svg>
        <NavMenu />
      </div>
      {/* <Dropdown /> */}
    </nav>
  );
}

export default Navbar;
