import Image from 'next/image';

const PageTtitle = ({
  title,
  text,
  image,
  emoji
}: {
  title: string;
  text: string;
  image?: string;
  emoji?: string;
}) => {
  return (
    <div className="page-title">
      <p className="page-title__emoji">
        {image ? <Image src={image} width={0} height={0} alt="emoji" /> : emoji}
      </p>
      <div className="page-title__text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default PageTtitle;
