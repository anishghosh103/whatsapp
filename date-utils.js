
const mDate = (dateString) => {
	
	let date = dateString ? new Date(dateString) : new Date();

	let dualize = (x) => x < 10 ? "0" + x : x;
	let getTime = () => dualize(date.getHours()) + ":" + dualize(date.getMinutes());
	let getDate = () => dualize(date.getDate()) + "/" + dualize(date.getMonth()) + "/" + dualize(date.getFullYear());

	return {
		subtract: (otherDateString) => {
			return date - new Date(otherDateString);
		},
		lastSeenFormat: () => {
			let dateDiff = Math.round(new Date() - date) / (1000 * 60 * 60 * 24);
			let value = (dateDiff === 0) ? "today" : (dateDiff === 1) ? "yesterday" : getDate();
			return value + " at " + getTime();
		},
		chatListFormat: () => {
			let dateDiff = Math.round((new Date() - date) / (1000 * 60 * 60 * 24));
			if (dateDiff === 0) {
				return getTime();
			} else if (dateDiff === 1) {
				return "Yesterday";
			} else {
				return getDate();
			}
		},
		getDate: () => {
			return getDate();
		},
		getTime: () => {
			return getTime();
		},
		toString:() => {
			return date.toString().substr(4, 20);
		},
	};
};