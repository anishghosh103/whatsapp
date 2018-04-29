
const mDate = (dateString) => {
	
	let date = dateString ? new Date(dateString) : new Date();

	let getTime = () => date.getHours() + ":" + date.getMinutes();
	let getDate = () => date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

	return {
		subtract: (otherDateString) => {
			return date - new Date(otherDateString);
		},
		lastSeenFormat: () => {
			let dateDiff = Math.round(new Date() - date) / (1000 * 60 * 60 * 24);
			let value = (dateDiff === 0) ? "today" : (dateDiff === 1) ? "yesterday" : getDate();
			return value + " at " + getTime();
		},
		getTime: () => {
			let dateDiff = Math.round((new Date() - date) / (1000 * 60 * 60 * 24));
			if (dateDiff === 0) {
				return getTime();
			} else if (dateDiff === 1) {
				return "Yesterday";
			} else {
				return getDate();
			}
		},
		toString:() => {
			return date.toString().substr(4, 20);
		},
	};
};