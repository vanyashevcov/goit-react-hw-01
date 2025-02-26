import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileCard}>
      <div className={css.profileHeader}>
        <img className={css.profileAvatar} src={image} alt={name} />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileStats}>
        <li className={css.profileStat}>
          <span className={css.profileStatLabel}>Followers</span>
          <span className={css.profileStatValue}>{stats.followers}</span>
        </li>
        <li className={css.profileStat}>
          <span className={css.profileStatLabel}>Views</span>
          <span className={css.profileStatValue}>{stats.views}</span>
        </li>
        <li className={css.profileStat}>
          <span className={css.profileStatLabel}>Likes</span>
          <span className={css.profileStatValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
