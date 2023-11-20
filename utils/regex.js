export const clear = (inputArray) => {
    const result = inputArray.reduce((acc, item) => {
        const { left, right } = item;
        if (left === '' || right === '') return acc;
        // Check if the key (left) already exists in the accumulator object
        if (acc[left] !== undefined && !acc[left].includes(right)) {
            // If it exists, push the right value to the existing array
            acc[left].push(right);
        } else {
            // If it doesn't exist, create a new array with the right value
            acc[left] = [right];
        }

        return acc;
    }, {});
    return result;
};

export const filterLowercase = (grammar) => {
    // Create a copy of the original grammar
    const filteredGrammar = { ...grammar };
    const result = [];
    // Iterate through the keys (non-terminal symbols) in the grammar
    for (const [key, value] of Object.entries(filteredGrammar)) {
        value.forEach((char) => {
            let listChar = char.split('');
            listChar.forEach((c) => {
                if (
                    (('a' <= c && c <= 'z') || ('0' <= c && c <= '9')) &&
                    !result.includes(c)
                ) {
                    result.push(c);
                }
            });
        });
    }

    return result;
};
export const checkGrammar = (
    grammar,
    start,
    string,
    path = [],
    depth = 1,
    curRule = start[0],
) => {
    console.log({ start, string });
    // Check if depth exceeds 100, and if so, return false to prevent infinite recursion
    if (depth > 1000) return false;

    // Check if both start and string are empty, which means a successful match
    if (!start && !string) {
        return true;
    }

    // Check if either start or string is empty, which means the match failed
    if (!start || !string) {
        return false;
    }

    // Check if the first character of start matches the first character of string
    if (start[0] === string[0]) {
        return checkGrammar(
            grammar,
            start.slice(1),
            string.slice(1),
            path,
            depth + 1,
            curRule,
        );
    }

    // Check if the first character of start is a non-terminal in the grammar
    if (grammar[start[0]]) {
        for (const rule of grammar[start[0]]) {
            // Save the current rule and update it
            let newCurRule = curRule;
            if (newCurRule !== string) {
                newCurRule = newCurRule.replace(start[0], rule);
                path.push(`${curRule} -> ${newCurRule}`);
            }

            if (
                checkGrammar(
                    grammar,
                    rule + start.slice(1),
                    string,
                    path,
                    depth + 1,
                    newCurRule,
                )
            ) {
                return true;
            }

            // If the match fails, pop the last path element
            path.pop();
        }
    }

    return false;
};
