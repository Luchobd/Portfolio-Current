export function Languages({ isSidebarClose }: { isSidebarClose: boolean }) {
  return (
    <select id="options" name="options" className="sidebar-select">
      <option value="option1" className="sidebar-select-option">
        🇺🇸 {!isSidebarClose && <>English</>}
      </option>
      <option value="option2" className="sidebar-select-option">
        🇪🇸 {!isSidebarClose && <>Español</>}
      </option>
    </select>
  );
}
