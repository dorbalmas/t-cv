import { SvgIconComponent } from '@mui/icons-material';
import { ButtonBase } from '@mui/material';

import { useAppDispatch } from '@/store/hooks';
import { ModalName, setModalState } from '@/store/modal/modalSlice';

import Tips from '../shared/Tips';
import styles from './ResumeCard.module.scss';

type Props = {
  modal: ModalName;
  icon: SvgIconComponent;
  title: string;
  subtitle: string;
};

const ResumeCard: React.FC<Props> = ({ modal, icon: Icon, title, subtitle }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setModalState({ modal, state: { open: true } }));
  };

  return (
    <section className={styles.resume}>
      <Tips tipsTitle="addResume" top="1.2rem" />
      <ButtonBase className={styles.preview} onClick={handleClick}>
        <Icon sx={{ fontSize: 84 }} />
      </ButtonBase>

      <footer>
        <div className={styles.meta}>
          <p>{title}</p>
          <p>{subtitle}</p>
        </div>
      </footer>
    </section>
  );
};

export default ResumeCard;
