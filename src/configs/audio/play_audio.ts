import Sound from 'react-native-sound';

// Cho phép phát cả khi ở chế độ im lặng (iOS)
Sound.setCategory('Playback');

/**
 * Phát file âm thanh local từ tên file (đã thêm đúng vị trí Android/iOS)
 * @param fileName ví dụ: 'notification_sound.mp3'
 */
export const playLocalSound = (fileName: string) => {
    const sound = new Sound(fileName, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('❌ Lỗi load âm thanh:', error);
            return;
        }

        console.log('Bắt đầu phát:', fileName);

        sound.play((success) => {
            if (success) {
                console.log('✅ Phát xong:', fileName);
            } else {
                console.log('❌ Phát lỗi:', fileName);
            }

            // Giải phóng tài nguyên
            sound.release();
        });
    });
};
