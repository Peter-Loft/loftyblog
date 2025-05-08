import { IKImage } from "imagekitio-react";

const Image = ({ url, className, w, h, alt }) => {
	return (
		<IKImage
			urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
			path={url}
			alt={alt}
			className={className}
			loading="lazy"
			lqip={{ active: true, quality: 20 }}
			width={w}
			height={h}
		/>
	);
}
export default Image;