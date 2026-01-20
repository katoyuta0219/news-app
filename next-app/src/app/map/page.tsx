import MapView from "@/components/map/MapView";
import Footer from "@/components/layout/footer";

export default function MapPage() {
    return (
        <div className="pb-20">
            <MapView />
            <Footer />
        </div>
    );
}