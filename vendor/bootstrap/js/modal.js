$(document).ready(function(){

    $("#myModal").modal()

    var modal = `            <div class="modal-dialog">
    <div class="modal-content">

        <!-- Modal Header -->
        <div class="modal-header">
            <h4 class="modal-title" id="weekPicks"> Week # Picks</h4>
            <!-- <button type="button" class="close" data-dismiss="modal">&times;</button> -->
        </div>

        <!-- Modal body -->
        <div class="container">
            <div class="modal-row">
            </div>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <h3>Pick 1</h3>
                        <p>Some text</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Pick 2</h3>
                        <p>Some text</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Pick 3</h3>
                        <p>Some text</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Pick 4</h3>
                        <p>Some text</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Pick 5</h3>
                        <p>Some text</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Pick 6</h3>
                        <p>Some text</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Pick 7</h3>
                        <p>Some text</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Pick 8</h3>
                        <p>Some text</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Pick 9</h3>
                        <p>Some text</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Pick 10</h3>
                        <p>Some text</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Pick 11</h3>
                        <p>Some text</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Pick 12</h3>
                        <p>Some text</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Pick 13</h3>
                        <p>Some text</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Pick 14</h3>
                        <p>Some text</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Pick 15</h3>
                        <p>Some text</p>
                    </div>
                </div>
            </div>
        </div>
      
        <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Submit</button>
        </div>
    </div>
</div>

`

$("#myModal").html(modal)
})

