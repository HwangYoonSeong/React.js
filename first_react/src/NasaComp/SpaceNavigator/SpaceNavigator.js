import React from 'react';
import styles from './SpaceNavigator.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SpaceNavigator = ({ onPrev, onNext }) => {
    return (
        <div className={cx('space-navigator')}>
            <div className={cx('left', 'end')}>
                <div className={cx('circle')} onClick={onPrev}>
                    <i class="fa fa-chevron-left"></i>
                </div>
            </div>
            <div className={cx('right', 'end')}>
                <div className={cx('circle')} onClick={onNext}>
                    <i class="fa fa-chevron-right"></i>
                </div>
            </div>
        </div>
    );
};

export default SpaceNavigator;