import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type Props = {
    children: React.ReactNode;
};

type State = {
    hasError: boolean;
    error: Error | null;
};

export class RealmErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('💥 Realm Error:', error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <View style={styles.errorContainer}>
                    <Text style={styles.title}>⚠️ Lỗi khi khởi tạo Realm</Text>
                    <Text style={styles.message}>{this.state.error?.message}</Text>
                </View>
            );
        }

        return this.props.children;
    }
}

const styles = StyleSheet.create({
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: 'red',
    },
    message: {
        fontSize: 14,
        textAlign: 'center',
        color: '#333',
    },
});
