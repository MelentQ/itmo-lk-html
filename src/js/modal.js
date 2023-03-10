import HystModal from "../libs/hystmodal/hystmodal.min";

export default function modal() {
    window.modal = new HystModal({
        closeOnEsc: false,
        linkAttributeName: "data-hystmodal"
    });
}