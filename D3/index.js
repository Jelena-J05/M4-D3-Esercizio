const url = "https://api.pexels.com/v1/search?query="

const fetchAlbum = (query) => {
  fetch(url + query, {
    headers: {
      Authorization: "LksgWoBMpvzDHUkdpGbF270NXscLWCSsZ5CFSzfPV9eCwyPjZILEdcba",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      let albumSection = document.querySelector(".album .row")
      albumSection.innerHTML = result.photos.map((photo) => {
        return `<div class='col col-4'> <div class="card mb-4 shadow-sm">
                <img src='${photo.src.large}'/>
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                  <small class="text-muted custom-ellipsis">${photo.alt}</small>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted"> Photographer: ${photo.photographer}</small>
                  </div>
                </div>
              </div> </div>`
      }).join("")
    })
    .catch((err) => console.error(err))
}


