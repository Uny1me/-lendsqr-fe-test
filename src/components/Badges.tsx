const InactiveBadge = () => {
  return (
    <div className="badge inactive-badge">
      <p className="text-secondary">Inactive</p>
    </div>
  );
};

const ActiveBadge = () => {
  return (
    <div className="badge active-badge">
      <p>Active</p>
    </div>
  );
};

export { InactiveBadge, ActiveBadge };
