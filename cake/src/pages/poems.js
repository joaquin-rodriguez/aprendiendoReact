import React from "react";

function storePoems() {
  return (
    <div id="prompt">
      <h1>poem 1</h1>
      <h3>alsdjkfh</h3>
      <form method="POST" action="save.php">
        <input type="text" id="secret" name="secret" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default storePoems;
