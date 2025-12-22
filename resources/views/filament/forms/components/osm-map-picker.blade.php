<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""></script>

<div
    x-data="{
        stateLat: $wire.entangle('data.latitude'),
        stateLng: $wire.entangle('data.longitude'),
        map: null,
        marker: null,

        initMap() {
            if (!this.$refs.mapContainer) return;

            // Ambil koordinat
            let lat = this.stateLat ? parseFloat(this.stateLat) : -6.26;
            let lng = this.stateLng ? parseFloat(this.stateLng) : 107.25;

            // Bersihkan map lama
            if (this.map) {
                this.map.remove();
                this.map = null;
            }

            // Render Peta
            this.map = L.map(this.$refs.mapContainer).setView([lat, lng], 13);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(this.map);

            this.marker = L.marker([lat, lng], { draggable: true }).addTo(this.map);

            // Update koordinat saat marker digeser
            this.marker.on('dragend', (event) => {
                let position = event.target.getLatLng();
                this.stateLat = position.lat;
                this.stateLng = position.lng;
            });

            // Fix tampilan abu-abu
            setTimeout(() => {
                this.map.invalidateSize();
            }, 500);
        },

        // 👇 FUNGSI BARU: Pengecekan Aman (Pengganti kode error tadi)
        waitForLeaflet() {
            if (window.L) {
                this.initMap();
            } else {
                // Cek lagi setiap 100ms
                let check = setInterval(() => {
                    if (window.L) {
                        clearInterval(check);
                        this.initMap();
                    }
                }, 100);
            }
        }
    }"
    x-init="waitForLeaflet()" 
    wire:ignore
    class="w-full rounded-xl overflow-hidden border border-gray-600 shadow-sm mt-2"
>
    <div x-ref="mapContainer" style="height: 400px; width: 100%; z-index: 1; background-color: #eee;"></div>
    
    <div class="p-2 bg-gray-800 text-xs text-gray-400 text-center border-t border-gray-600">
        Geser Pin Biru untuk menentukan lokasi.
    </div>
</div>