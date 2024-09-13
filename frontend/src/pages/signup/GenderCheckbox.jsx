export default function GenderCheckbox() {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-white">Male</span>
          <input type="checkbox" className="checkbox border-slate-200" />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-white">Female</span>
          <input type="checkbox" className="checkbox border-slate-200" />
        </label>
      </div>
    </div>
  );
}
