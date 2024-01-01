import styles from '@/styles/Component.module.scss';

const BlogList = () => {
  const posts = [1, 2, 3, 4, 5];
  return posts?.map((item, idx) => {
    return (
      <div className={`mt-10 mb-10 ${styles.card}`} key={idx}>
        <div className={`${styles.cart_tags}`}>
          <span>typescript</span>
          <span>next js</span>
        </div>
        <div className={`${styles.card_title}`}>타입 정의</div>
        <div className={`${styles.card_text}`}>
          타입스크립트는 변수와 함수에 타입을 정의할 수 있다. 아래와 같은 방식으로 콜론(:)을 이용하여 타입을 정의하는
          방식을 타입표기(Type Annotation)라고 한다.
        </div>
        <div className={`${styles.card_date}`}>2024.01.01</div>
      </div>
    );
  });
};

export default BlogList;
